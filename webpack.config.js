const path = require('path');

const VENDOR_LIBS =[
    'react','react-dom','lodash','react-redux'
];

module.exports={
  //Entry file for the bundle
  entry: {
    bundle:'/client/index.js',
    vendor:VENDOR_LIBS
  }

  //The output for the bundle
  output:{
    path: path.join(__dirname, 'client/dist/js'),
    filename:'app.js'
  },
  module:{

  }
}
