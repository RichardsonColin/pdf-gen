#PDF GEN

This is a simple service that leverages node html-pdf to convert an html document to pdf. 

At this time public access is unavailable but will be soon. If i haven't gotten to it please contact me @ my github: patricksimonian@gmail.com and i'll work on it!

## api access
(please note these routes may not be available at this time)

 - GET '/api/status': this will send a '200 OK' to your server, you can use this to poll the server to see if its online
 - POST '/api/pdfconvert': this will expects two form inputs HTML[string] && base[string]. Please see
 [node-html-pdf](https://github.com/marcbachmann/node-html-pdf) config options guide in reference to what the base is used for.