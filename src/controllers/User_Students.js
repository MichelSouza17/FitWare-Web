const User_Student = require("../models/UserStudent");
const AddressStudent = require("../models/StudentUserAddress");

const bcrypt = require("bcrypt");

module.exports = {
  index(req, res) {},

  find(req, res) {},

  async store(req, res) {
    const {
      first_name,
      surname,
      email,
      password,
      image_profile,
      weight,
      height,
      cpf,
      birth_date,
      celular,
      cep,
      street,
      state,
      city,
    } = req.body;
    const {userStudentId}  = req; 

    try {
      // const encryptedPassword = bcrypt.hashSync(password);
      
      user_student = await User_Student.create({
        first_name,
        surname,
        email,
        password,
        weight,
        height,
        cpf,
        birth_date,
        celular,
        image_profile,
      });

      user_students = await User_Student.findByPk(userStudentId);
      console.log(user_students);
      
      
      const student_address = await AddressStudent.createUserStudent({
        student_id: userStudentId,
        cep,
        street,
        state,
        city,
      });

      res.status(201).send({
        user_student: {
          user_student_id: user_student.id,
          first_name: user_student.first_name,
          surname: user_student.surname,
          email: user_student.email,
          // password: user_student.password,
          weight: user_student.weight,
          height: user_student.height,
          cpf: user_student.cpf,
          birth_date: user_student.birth_date,
          celular: user_student.celular,
          image_profile,
          student_address:{
            student_address: student_address
          }
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  delete(req, res) {},

  update(req, res) {},
};

// for (let assoc of Object.keys(Address_student.associations)) {
//     for (let accessor of Object.keys(Address_student.associations[assoc].accessors)) {
//         console.log(Address_student.name + '.' + Address_student.associations[assoc].accessors[accessor] + '()');
//     }
// }
