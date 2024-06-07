import { Sequelize } from "sequelize";
import { config } from "dotenv";
config()
export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, {
    host: 'localhost',
    dialect: 'mysql'
  });

sequelize.authenticate().then(()=>{
    console.log("Connection has been esablished successfully");
}).catch((error)=>{
    console.log("unable to connect to database",error);
})