import { DataTypes } from "sequelize";
import sequelize from "./db.js";
// import Course from './Course-model.js'; // Uncomment if Course model exists

const Student = sequelize.define(
  "Student",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    studentID: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nationlity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    yearOfStudy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "students",
    timestamps: true,
  }
);

// Instance method stub for registering a course
Student.prototype.registerCourse = function (course) {
  // Implement course registration logic here
  // Example: this.addCourse(course);
};

// Sync model to create table if not exists
Student.sync({ alter: true })
  .then(() => {
    console.log('Table "students" is ready');
  })
  .catch((error) => {
    console.error("Error syncing table:", error);
  });

export default Student;
