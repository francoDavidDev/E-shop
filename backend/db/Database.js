const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopoLogy: true,
    }).then((data)=>{
        console.log(`mongoodb connected with server: ${data.connection.host} `)
    })
};

module.exports = connectDatabase

/*
useNewUrlParser: true y useUnifiedTopology: true. 
Estas opciones son necesarias para evitar advertencias de deprecación 
y para asegurar una conexión estable.



useNewUrlParser: true and useUnifiedTopology: true.
These options are necessary to avoid deprecation warnings
and to ensure a stable connection.

*/