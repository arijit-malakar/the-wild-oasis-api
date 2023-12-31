const { add } = require("date-fns");

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

exports.bookings = [
  // CABIN 001 : 6573695f072cdcf41b0c7e6f
  {
    createdAt: fromToday(-20, true),
    startDate: fromToday(0),
    endDate: fromToday(7),
    cabin: "6573695f072cdcf41b0c7e6f",
    guest: "657da6afe4c8df15ae3d7f30",
    hasBreakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    isPaid: false,
    numGuests: 1,
  },
  {
    createdAt: fromToday(-33, true),
    startDate: fromToday(-23),
    endDate: fromToday(-13),
    cabin: "6573695f072cdcf41b0c7e6f",
    guest: "657da6afe4c8df15ae3d7f31",
    hasBreakfast: true,
    observations: "",
    isPaid: true,
    numGuests: 2,
  },
  {
    createdAt: fromToday(-27, true),
    startDate: fromToday(12),
    endDate: fromToday(18),
    cabin: "6573695f072cdcf41b0c7e6f",
    guest: "657da6afe4c8df15ae3d7f32",
    hasBreakfast: false,
    observations: "",
    isPaid: false,
    numGuests: 2,
  },

  // CABIN 002 : 6573695f072cdcf41b0c7e70
  {
    createdAt: fromToday(-45, true),
    startDate: fromToday(-45),
    endDate: fromToday(-29),
    cabin: "6573695f072cdcf41b0c7e70",
    guest: "657da6afe4c8df15ae3d7f2f",
    hasBreakfast: false,
    observations: "",
    isPaid: true,
    numGuests: 2,
  },
  {
    createdAt: fromToday(-2, true),
    startDate: fromToday(15),
    endDate: fromToday(18),
    cabin: "6573695f072cdcf41b0c7e70",
    guest: "657da6afe4c8df15ae3d7f35",
    hasBreakfast: true,
    observations: "",
    isPaid: true,
    numGuests: 2,
  },
  {
    createdAt: fromToday(-5, true),
    startDate: fromToday(33),
    endDate: fromToday(48),
    cabin: "6573695f072cdcf41b0c7e70",
    guest: "657da6afe4c8df15ae3d7f36",
    hasBreakfast: true,
    observations: "",
    isPaid: false,
    numGuests: 2,
  },

  // CABIN 003 : 6573695f072cdcf41b0c7e71
  {
    createdAt: fromToday(-65, true),
    startDate: fromToday(-25),
    endDate: fromToday(-20),
    cabin: "6573695f072cdcf41b0c7e71",
    guest: "657da6afe4c8df15ae3d7f37",
    hasBreakfast: true,
    observations: "",
    isPaid: true,
    numGuests: 4,
  },
  {
    createdAt: fromToday(-2, true),
    startDate: fromToday(-2),
    endDate: fromToday(0),
    cabin: "6573695f072cdcf41b0c7e71",
    guest: "657da6afe4c8df15ae3d7f38",
    hasBreakfast: false,
    observations: "We will be bringing our small dog with us",
    isPaid: true,
    numGuests: 3,
  },
  {
    createdAt: fromToday(-14, true),
    startDate: fromToday(-14),
    endDate: fromToday(-11),
    cabin: "6573695f072cdcf41b0c7e71",
    guest: "657da6afe4c8df15ae3d7f39",
    hasBreakfast: true,
    observations: "",
    isPaid: true,
    numGuests: 4,
  },

  // CABIN 004 : 6573695f072cdcf41b0c7e72
  {
    createdAt: fromToday(-30, true),
    startDate: fromToday(-4),
    endDate: fromToday(8),
    cabin: "6573695f072cdcf41b0c7e72",
    guest: "657da6afe4c8df15ae3d7f3a",
    hasBreakfast: true,
    observations: "",
    isPaid: true,
    numGuests: 4,
  },
  {
    createdAt: fromToday(-1, true),
    startDate: fromToday(12),
    endDate: fromToday(17),
    cabin: "6573695f072cdcf41b0c7e72",
    guest: "657da6afe4c8df15ae3d7f3b",
    hasBreakfast: true,
    observations: "",
    isPaid: false,
    numGuests: 4,
  },
  {
    createdAt: fromToday(-3, true),
    startDate: fromToday(18),
    endDate: fromToday(19),
    cabin: "6573695f072cdcf41b0c7e72",
    guest: "657da6afe4c8df15ae3d7f3c",
    hasBreakfast: false,
    observations: "",
    isPaid: true,
    numGuests: 1,
  },

  // CABIN 005 : 6573695f072cdcf41b0c7e73
  {
    createdAt: fromToday(0, true),
    startDate: fromToday(14),
    endDate: fromToday(21),
    cabin: "6573695f072cdcf41b0c7e73",
    guest: "657da6afe4c8df15ae3d7f3d",
    hasBreakfast: true,
    observations: "",
    isPaid: false,
    numGuests: 5,
  },
  {
    createdAt: fromToday(-6, true),
    startDate: fromToday(-6),
    endDate: fromToday(-4),
    cabin: "6573695f072cdcf41b0c7e73",
    guest: "657da6afe4c8df15ae3d7f3e",
    hasBreakfast: true,
    observations: "",
    isPaid: true,
    numGuests: 4,
  },
  {
    createdAt: fromToday(-4, true),
    startDate: fromToday(-4),
    endDate: fromToday(-1),
    cabin: "6573695f072cdcf41b0c7e73",
    guest: "657da6afe4c8df15ae3d7f3f",
    hasBreakfast: false,
    observations: "",
    isPaid: true,
    numGuests: 6,
  },

  // CABIN 006 : 6573695f072cdcf41b0c7e74
  {
    createdAt: fromToday(-3, true),
    startDate: fromToday(0),
    endDate: fromToday(11),
    cabin: "6573695f072cdcf41b0c7e74",
    guest: "657da6afe4c8df15ae3d7f40",
    hasBreakfast: false,
    observations:
      "We will be checking in late, around midnight. Hope that's okay :)",
    isPaid: true,
    numGuests: 6,
  },
  {
    createdAt: fromToday(-16, true),
    startDate: fromToday(-16),
    endDate: fromToday(-9),
    cabin: "6573695f072cdcf41b0c7e74",
    guest: "657da6afe4c8df15ae3d7f41",
    hasBreakfast: true,
    observations: "I will need a rollaway bed for one of the guests",
    isPaid: true,
    numGuests: 4,
  },
  {
    createdAt: fromToday(-18, true),
    startDate: fromToday(-4),
    endDate: fromToday(-1),
    cabin: "6573695f072cdcf41b0c7e74",
    guest: "657da6afe4c8df15ae3d7f34",
    hasBreakfast: true,
    observations: "",
    isPaid: true,
    numGuests: 6,
  },

  // CABIN 007 : 6573695f072cdcf41b0c7e75
  {
    createdAt: fromToday(-2, true),
    startDate: fromToday(17),
    endDate: fromToday(23),
    cabin: "6573695f072cdcf41b0c7e75",
    guest: "657da6afe4c8df15ae3d7f33",
    hasBreakfast: false,
    observations: "",
    isPaid: false,
    numGuests: 8,
  },
  {
    createdAt: fromToday(-7, true),
    startDate: fromToday(40),
    endDate: fromToday(50),
    cabin: "6573695f072cdcf41b0c7e75",
    guest: "657da6afe4c8df15ae3d7f44",
    hasBreakfast: true,
    observations: "",
    isPaid: true,
    numGuests: 7,
  },
  {
    createdAt: fromToday(-55, true),
    startDate: fromToday(32),
    endDate: fromToday(37),
    cabin: "6573695f072cdcf41b0c7e75",
    guest: "657da6afe4c8df15ae3d7f45",
    hasBreakfast: true,
    observations: "",
    isPaid: true,
    numGuests: 6,
  },

  // CABIN 008 : 6573695f072cdcf41b0c7e76
  {
    createdAt: fromToday(-8, true),
    startDate: fromToday(-5),
    endDate: fromToday(0),
    cabin: "6573695f072cdcf41b0c7e76",
    guest: "657da6afe4c8df15ae3d7f2e",
    hasBreakfast: true,
    observations:
      "My wife has a gluten allergy so I would like to request a gluten-free breakfast if possible",
    isPaid: true,
    numGuests: 9,
  },
  {
    createdAt: fromToday(0, true),
    startDate: fromToday(0),
    endDate: fromToday(5),
    cabin: "6573695f072cdcf41b0c7e76",
    guest: "657da6afe4c8df15ae3d7f46",
    hasBreakfast: true,
    observations:
      "I am celebrating my anniversary, can you arrange for any special amenities or decorations?",
    isPaid: true,
    numGuests: 10,
  },
  {
    createdAt: fromToday(-10, true),
    startDate: fromToday(10),
    endDate: fromToday(13),
    cabin: "6573695f072cdcf41b0c7e76",
    guest: "657da6afe4c8df15ae3d7f47",
    hasBreakfast: false,
    observations: "",
    isPaid: true,
    numGuests: 7,
  },
];
