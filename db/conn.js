// Somente para ambiente local
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect("mongodb+srv://admin:admin@cluster0.cu1u3vz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log('Conectou com Mongoose!');
  } catch (error) {
    console.error('Erro ao conectar com Mongoose:', error);
  }
}

main();

module.exports = mongoose;
