const express = require("express");


// Importar o controller
const UserStudentController =  require("./controllers/User_Students");
const UserStudentAddressController =  require("./controllers/User_address");

const routes = express.Router();

routes.post("/UserAcademy", UserStudentController.store, UserStudentAddressController.store);

module.exports = routes;