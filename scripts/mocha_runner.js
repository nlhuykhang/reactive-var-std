require('babel-core/register');
require('babel-polyfill');

/* istanbul ignore next */
process.on('unhandledRejection', function (error) {
  console.error('Unhandled Promise Rejection:');
  console.error(error && error.stack || error);
});
