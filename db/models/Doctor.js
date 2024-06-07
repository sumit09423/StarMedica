import { sequelize } from "../config";
import { DataTypes,Model } from "sequelize";

class Doctor extends Model {}

Doctor.init(
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull:false
      // allowNull defaults to true
    },
    username:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false
    },
    dateOfBirth:{
      type:DataTypes.DATE,
      allowNull:false
    },
    gender:{
        type:DataTypes.ENUM(['male','female','other']),
        allowNull:false
    },
    doctorLicenseNumbeer:{
      type:DataTypes.STRING,
      allowNull:false
    },
    degree:{
      type:DataTypes.STRING,
      allowNull:false
    },
    address:{
      type:DataTypes.TEXT,
      allowNull:false
    },
    categoryId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'category',
        key:'id'
      }
    }

  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'doctors', // We need to choose the model name
  },
);