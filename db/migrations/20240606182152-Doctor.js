'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('doctors',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull:false
        // allowNull defaults to true
      },
      username:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      password:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      email:{
        type:Sequelize.STRING,
        allowNull:false
      },
      dateOfBirth:{
        type:Sequelize.DATE,
        allowNull:false
      },
      gender:{
          type:Sequelize.ENUM(['male','female','other']),
          allowNull:false
      },
      doctorLicenseNumbeer:{
        type:Sequelize.STRING,
        allowNull:false
      },
      degree:{
        type:Sequelize.STRING,
        allowNull:false
      },
      address:{
        type:Sequelize.TEXT,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('doctors')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
