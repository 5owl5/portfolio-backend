import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./userimages/");
  },
  filename: (req, file, cb) => {
    cb(null, req.currentUserId + ".png");
  },
});

const fileFilter = (req, file, cb) => {
  let exe = path.extname(file.originalname);
  exe = exe.toLowerCase();
  if (exe !== ".png" && exe !== ".jpg" && exe !== ".jpeg") {
    return cb(new Error("PNG, JPG, JPEG 파일만 업로드 가능합니다."));
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 20 * 1024 * 1024,
  },
});

export { upload };
