require('dotenv').config();
const mongoose = require('mongoose');

async function main() {
  const mongoURI = process.env.MONGODB_URI;
  try {
    await mongoose.connect(mongoURI);
    console.log('Conectou com Mongoose!');
  } catch (error) {
    console.error('Erro ao conectar com Mongoose:', error);
  }
}

main();

module.exports = mongoose;
