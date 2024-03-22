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