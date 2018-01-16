const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const fs = require('fs');
const path = require('path');
const app = express();

var genName = function(length) {
  let vals = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
   'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let str = '';
  while(str.length !== length) {
    let i = Math.floor(Math.random() * vals.length);
    str += vals[i];
  }

  return str;
}
//middlewares
app.use(cors());

app.use(bodyParser.text({ type: 'text/html' }));

app.use((req, res, next) => {
  console.log('receiving request');
  console.log(req.headers)
  if(!req.headers['x-cfm-key'] || req.headers['x-cfm-key'] !== 'matt-damon') {
    res.sendStatus(401);
  } else {
    next();
  }
});


app.post('/api/pdfconvert', (req, res) => {
  const html = req.body;
  //conver html to pdf in temp directory
  let file = genName(20) + '.pdf';
  console.log('begin stream into', file);
  pdf.create(html).toStream((err, stream) => {
    let w = fs.createWriteStream(path.join(__dirname, './tmp/', file));
    stream.pipe(w);
    w.on('finish', () => {
      console.log('stream complete');
      res.sendFile(path.join(__dirname, './tmp/', file));
      console.log("sent file");
    });
  });
});

app.listen(8080, () => {
  console.log('listening on 8080');
});