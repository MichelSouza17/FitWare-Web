const UserStudentAddress = require("../models/StudentUserAddress");
const UserStudent = require("../models/UserStudent");

module.exports = {
  async store(req, res) {

    const { userStudentId } = req;
    const { cep, street, state, city } = req.body;

    try {
      const student = await UserStudent.findByPk(userStudentId);
      console.log(student);

      const address = await UserStudentAddress.create({
        student_id: userStudentId,
        cep,
        street,
        state,
        city,
      });

      res.status(201).send(address);

    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
