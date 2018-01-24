module.exports = {
  isInWhitelist: function(list, path) {
    return list.findIndex((l) => {
      return l === path;
    }) > -1;
  },

  hasPDFParams: function(body) {
    return body.hasOwnProperty("HTML") 
      && body.hasOwnProperty("base");
  }
}