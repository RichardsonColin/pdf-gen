
const utils = require('../helpers/utils.js')
const whitelist = ['/api/status'];
const CFMKEY = process.env.CFMKEY;


module.exports = {
  checkAPIKey: (req, res, next) => {
    let url = req.originalUrl;
    next();
    // if(utils.isInWhitelist(whitelist, url)) {
    //   next();
    // } else {
    //   let cfmkey = req.headers['x-cfm-key'];
    //   console.log(typeof req.body, "request body");
    //   // check api key **this will be refactored once a db is in place
    //   if(cfmkey !== CFMKEY) {
    //     res.sendStatus(401);
    //     // check if has the correct request body data
    //   } else if(!utils.hasPDFParams(req.body)) {
    //     res.sendStatus(400);
    //   }else {
    //     next();
    //   }
    // }
  }
}