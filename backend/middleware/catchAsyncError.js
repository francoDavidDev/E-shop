module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};
 /*catchAsyncError.js: Este archivo exporta una función de utilidad que 
 envuelve funciones asincrónicas para manejar errores
  de manera consistente utilizando Promesas en Express. */