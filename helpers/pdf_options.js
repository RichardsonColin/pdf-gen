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
      'border': '1cm',
      'phantomPath': phantomPath
    }
  }
}