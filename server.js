const app = require("./app");
const config = require("./app/config");
const MongoDB =require("./app/utils/mongo.utils");



const startServer= async()=>{
    try{
        await MongoDB.connect(config.db.url);
        console.log("Connect to the database!!!");

        const PORT = config.app.port;
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}.`);
        })
    }catch(err){
        console.log("Cannot connect to the database!",err);
        process.exit();
    }
}

startServer();