import student from "../models/student.models.js";
const studentController = {};
// Create and save a new restaurant
studentController.create = async (req, res) => {
  const {
    firstName,
    lastName,
    gender,
    birthDate,
    email,
    phone,
    address,
    nationality,
    yearOfStudy,
  } = req.body;
  // Validate data
  if (student) {
    return res
      .status(400)
      .send({ message: "Name, Type or ImageUrl can not be empty!" });
  }
  try {
    // ...existing code...
    const studentExist = await student.findOne({ where: { firstName } });
    if (studentExist) {
      return res.status(400).send({ message: "student already exists!" });
    }
    const newStudent = {
      firstName,
      lastName,
      gender,
      birthDate,
      email,
      phone,
      address,
      nationality,
      yearOfStudy,
    };
    const data = await student.create(newStudent);
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Something error while create the student",
    });
  }
};
//get all students
studentController.getAll = async (req, res) => {
  await student
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Something error while retrieving student",
      });
    });
};

//get student by id
studentController.getById = async (req, res) => {
  const id = req.params.id;
  await student
    .findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "no found student with id" + id });
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Something error while getting student id" + id,
      });
    });
};

// Update a student by id
studentController.update = async (req, res) => {
  const id = req.params.id;
  const {
    firstName,
    lastName,
    gender,
    birthDate,
    email,
    phone,
    address,
    nationality,
    yearOfStudy,
  } = req.body;
  // Validate data
  if (
    !firstName &&
    !lastName &&
    !gender &&
    !birthDate &&
    !email &&
    !phone &&
    !address &&
    !nationality &&
    !yearOfStudy
  ) {
    res.status(400).send({ message: "Name, Type, ImageUrl can not be empty" });
    return;
  }
  await student
    .update(
      {
        firstName,
        lastName,
        gender,
        birthDate,
        email,
        phone,
        address,
        nationality,
        yearOfStudy,
      },
      { where: { id } }
    )
    .then((num) => {
      if (num[0] === 1) {
        res.send({ message: "student updated successfully." });
      } else {
        res.send({
          message:
            "can not update student with id " +
            id +
            ". Maybe student was not found or req.body is empty!",
        });
      }
    });
};

//Delete a student by id
studentController.deleteById = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).send({ message: "Id is missing" });
    return;
  }
  await student
    .destroy({
      where: { id },
    })
    .then((num) => {
      if (num === 1) {
        res.send({ message: "student was deleted successfully!" });
      } else {
        res.status(404).send({
          message:
            "Cannot delete student with id=${id}. Maybe it was not found!",
        });
      }
    });
};

export default studentController;
