module.exports = {
  isInWhitelist: function(list, path) {
    return list.findIndex((l) => {
      return l === path;
    }) > -1;
  },
  hasPDFParams: function(body) {
    return (body.hasOwnProperty("data") 
      && body.data.hasOwnProperty("HTML") 
      && body.data.hasOwnProperty("base"));
  }
}