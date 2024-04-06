const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server Error";

  //wrong mongodb id error
  if(err.name === "CastError"){
    const message = `Resources not found with this id... Invalid ${err.path} `
    err = new ErrorHandler(message,400);
  }

  //Duplicate key error
  if(err.code === 11000 ){
    const message = `Duplicate key ${Object.keys(err.keyValue)} Entered `;
    err = new ErrorHandler(message,400)
  }

  // wrong kwt error
  if(err.name === 'JsonWebTokenError' ){
    const message = `Your url is invalid please try again letter `;
    err = new ErrorHandler(message,400);
  }

  // jwt expired
  if(err.name === "TokerExpiredError" ){
    const message =  `Your Url is expired pleaase try again letter! `;
    err = new ErrorHandler(message,400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message
  })
};
   

/*error.js: Este archivo es un middleware de manejo de errores
 que proporciona una forma estructurada de manejar diferentes 
 tipos de errores que pueden ocurrir en una aplicación Express. */