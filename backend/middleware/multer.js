// import multer from "multer";


// const storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, "uploads/"); // This folder must exist
//   },
//        filename:function (req, file, callback) {
//     callback(null, file.originalname);
//   }
// }); 

// const upload = multer({ storage });

// export default upload;

import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
});

export default upload;
