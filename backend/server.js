const app = require("./app");
const connectDatabase = require("./db/Database")

// Handling uncaught Exception
/*Establece un manejador para eventos de excepciones no capturadas. Esto captura 
cualquier excepción que no haya sido manejada en el código y muestra un mensaje de 
error en la consola. Además, indica que el servidor se está apagando para manejar 
la excepción no capturada. */
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server for handling uncaught exception `);
});

// config
/* Carga las variables de entorno desde un archivo .env si el entorno no es de producción. 
Esto es útil para cargar las variables de entorno locales durante el desarrollo */
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backed/config/.env",
  });
}

// connect db
connectDatabase();

//create server
const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT} `
  );
});

// unhandled promise refection - rechazo de promesa no manejado
//cerrar el servidor para manejar la excepción no detectada
//cerrar el servidor para no gestionar el rechazo de la promesa
/*Establece un manejador para eventos de rechazo de promesas no manejadas. 
Esto captura cualquier promesa rechazada que no haya sido manejada en el código
 y muestra un mensaje de error en la consola. Además, indica que el servidor se 
 está apagando para manejar el rechazo de la promesa no manejado. */
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}  `);
  console.log(`shutting down the server fot unhandled promise rejection`)

  server.close(()=>{
    process.exit(1)
  })
});
