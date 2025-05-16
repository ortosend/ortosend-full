const mongoose = require('mongoose');
const citaSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  clinica: String,
  fecha: String,
  estado: { type: String, default: 'pendiente' }
});
module.exports = mongoose.model('Cita', citaSchema);