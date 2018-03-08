module.exports = function(options) {
  return function(req, res, next) {
    //Implement the middleare function based on the options object
    next()
  }
}
