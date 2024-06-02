// models/Doctor.js

const Doctor = {
  id: {
    type: "INTEGER",
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: "STRING",
    allowNull: false,
    unique: true,
  },
  password: {
    type: "STRING",
    allowNull: false,
  },
};

module.exports = Doctor;
