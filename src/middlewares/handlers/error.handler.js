const errorLog = (err, req, res, next) => {
  console.error(err);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    srack: err.stack
  });
};

const boomErrorHandler = (err, req, res, next) => {
  if(err.isBoom){
    const {output} = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
};

module.exports = {errorLog, errorHandler, boomErrorHandler}