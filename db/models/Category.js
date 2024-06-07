import { sequelize } from "../config";
import { DataTypes, Model } from "sequelize";

class Category extends Model { }

Category.init(
    {
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },


    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Category', // We need to choose the model name
    },
);