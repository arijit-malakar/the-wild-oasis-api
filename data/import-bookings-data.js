const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const {
  isPast,
  isToday,
  isFuture,
  parseISO,
  differenceInDays,
} = require("date-fns");
const { bookings } = require("./data-bookings");
const Cabin = require("../models/cabinModel");
const Booking = require("../models/bookingModel");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB).then(() => console.log("DB connection successfull"));

const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

const importData = async () => {
  try {
    const finalBookings = await Promise.all(
      bookings.map(async (booking) => {
        const cabin = await Cabin.findById(booking.cabin);
        const numNights = subtractDates(booking.endDate, booking.startDate);
        const cabinPrice = numNights * (cabin.regularPrice - cabin.discount);
        const extrasPrice = booking.hasBreakfast
          ? numNights * 15 * booking.numGuests
          : 0; // hardcoded breakfast price
        const totalPrice = cabinPrice + extrasPrice;

        let status;
        if (
          isPast(new Date(booking.endDate)) &&
          !isToday(new Date(booking.endDate))
        )
          status = "checked-out";
        if (
          isFuture(new Date(booking.startDate)) ||
          isToday(new Date(booking.startDate))
        )
          status = "unconfirmed";
        if (
          (isFuture(new Date(booking.endDate)) ||
            isToday(new Date(booking.endDate))) &&
          isPast(new Date(booking.startDate)) &&
          !isToday(new Date(booking.startDate))
        )
          status = "checked-in";

        return {
          ...booking,
          numNights,
          cabinPrice,
          extrasPrice,
          totalPrice,
          status,
        };
      })
    );

    await Booking.create(finalBookings);
    console.log("Data successfully loaded 🎉");
    process.exit();
  } catch (err) {
    console.log("Data loading failed! ☹️", err);
  }
};

const deleteData = async () => {
  try {
    await Booking.deleteMany();
    console.log("Data successfully deleted");
    process.exit();
  } catch (err) {
    console.log("Data deletion failed! ☹️", err);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
