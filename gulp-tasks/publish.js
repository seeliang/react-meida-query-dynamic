const sequence = require('run-sequence');

module.exports = () => {
  sequence(
    'clean',
    ['html','webpack','vendor:publish'],
    'js:rename',
    'js:clean'
  );
};
