var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express()

app.post('/upload', upload.single('photo'), function (req, res, next) {
  res.json({
    status:"ok"
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})