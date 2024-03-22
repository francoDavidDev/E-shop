const app = require("./app");
const connectDatabase = require("./db/Database")

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server for handling uncaught exception `);
});

// config
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
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}  `);
  console.log(`shutting down the server fot unhandled promise rejection`)

  server.close(()=>{
    process.exit(1)
  })
});
