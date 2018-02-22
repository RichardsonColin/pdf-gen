const phantomPath = require('witch')('phantomjs');
module.exports = {
  getOptions: function() {
    return {
      'format': 'Letter',  
      'orientation': 'portrait',
      'viewportSize': {
        'width': 10,
        'height': 10
      },
      'border': {
        'top': '0',
        'bottom': '1cm',
        'right': '1cm',
        'left': '1cm'
      }
    }
  }
}