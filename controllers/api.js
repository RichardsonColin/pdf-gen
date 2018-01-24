const rando = require('randomatic');
const fs = require('fs');
const path = require('path');
const pdf = require('html-pdf');
const pdfOpts = require('../helpers/pdf_options');
let pdfOptions = pdfOpts.getOptions();
module.exports = {
  getServerStatus:  (req, res) => {
    console.log("status okay")
    res.sendStatus(200);
  },
  convertPDF: (req, res) => {
    console.log("here?")
    console.log("accessing api");
    let data = req.body;
    let file = rando('Aa0', 20) + '.pdf';
    let tmpPath = path.join(__dirname, '../tmp/')
      //conver html to pdf in temp directory
      console.log('begin stream into', file);
      // get base from req
      pdfOptions.base = data.base || "http:localhost:8500/";
      pdf.create(data.HTML, pdfOptions).toStream((err, stream) => {
        let w = fs.createWriteStream(tmpPath + file);
        stream.pipe(w);
        w.on('finish', () => {
            console.log('stream complete');
            let uploadFile = tmpPath + file;
            res.sendFile(uploadFile, (err) => {
              if (err) {
                next(err);
              } else {
                try {
                  console.log("removed file!");
                  fs.unlink(uploadFile); 
                } catch(e) {
                  console.log("error removing ", uploadFile); 
                }
              }
            });
            console.log("sent file");
        });
      });
  }
}