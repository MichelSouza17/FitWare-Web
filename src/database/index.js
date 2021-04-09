const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

// IMPORTANDO OS MODELS
const UserStudent = require("../models/UserStudent");
const StudentUserAddress = require("../models/StudentUserAddress");

const connection = new Sequelize(dbConfig);

// INICIANDO OS MODELS
UserStudent.init(connection);
StudentUserAddress.init(connection);

// INICIANDO OS RELACIONAMENTOS
UserStudent.associate(connection.models);
StudentUserAddress.associate(connection.models);
