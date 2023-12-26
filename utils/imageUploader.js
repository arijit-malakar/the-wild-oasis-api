const multer = require("multer");

exports.imageUploader = (resourceName, fieldName) => {
  const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `uploads/${resourceName}s`);
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      cb(null, `${resourceName}-${Date.now()}.${ext}`);
    },
  });

  const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb(new AppError("Please upload an image!", 400), false);
    }
  };

  const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

  return upload.single(fieldName);
};
