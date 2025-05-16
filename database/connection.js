const mongoose = require('mongoose');
const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('DB conectada');
  } catch (error) {
    console.error('Error DB:', error);
  }
};
module.exports = conectarDB;