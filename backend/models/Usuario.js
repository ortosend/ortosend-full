const mongoose = require('mongoose');
const usuarioSchema = new mongoose.Schema({
  email: String,
  password: String,
  rol: String // 'clinica' o 'fabricante'
});
module.exports = mongoose.model('Usuario', usuarioSchema);