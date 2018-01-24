
const utils = require('../helpers/utils.js')
const whitelist = ['/api/status'];
const CFMKEY = process.env.CFMKEY;


module.exports = {
  checkAPIKey: (req, res, next) => {
    let url = req.originalUrl;
    if(utils.isInWhitelist(whitelist, url)) {
      next();
    } else {
      // check api key **this will be refactored once a db is in place
      if(!req.headers['x-cfm-key'] || req.headers['x-cfm-key'] !== CFMKEY) {
        res.sendStatus(401);
        // check if has the correct request body data
      } else if(!utils.hasPDFParams(req.body)) {
        res.sendStatus(400);
      }else {
        next();
      }
    }
  }
}