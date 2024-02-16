const router = require("express").Router()
const multer  = require('multer');
const path = require('path');

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Folder where files will be uploaded
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

// Initialize upload
const upload = multer({
  storage: storage,
  limits:{ fileSize: 1000000 } // Limit file size to 1MB
}).single('file'); // 'file' is the name attribute in the form input field

// Upload endpoint
router.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      res.status(400).json({ error: err.message });
    } else {
      if(req.file === undefined){
        res.status(400).json({ error: 'No file selected' });
      } else {
        res.status(200).json({ message: 'File uploaded successfully', filename: req.file.filename });
      }
    }
  });
});

module.exports = router
