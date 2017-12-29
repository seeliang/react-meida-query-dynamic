let config;

if(process.env.NODE_ENV === 'prod') {
  const prod = require('./webpack.prod.js');
  console.log('\n' + 'OK, we will load config for prod \n'); 
  config = prod;
}

if(process.env.NODE_ENV === 'dev') {
  const dev = require('./webpack.dev.js');
  console.log('\n' + 'OK, we will load config for dev \n'); 
  config = dev;
}

if(typeof(config) !== 'object') {
  console.log('\n' + 'Oh my, we missing NODE_ENV set, that is bad' + '\n'); 
  return;
}

module.exports = config;
