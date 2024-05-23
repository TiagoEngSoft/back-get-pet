// Somente para ambiente local
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectou com Mongoose!');
  } catch (error) {
    console.error('Erro ao conectar com Mongoose:', error);
  }
}

main();

module.exports = mongoose;
