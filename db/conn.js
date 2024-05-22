require('dotenv').config();
const mongoose = require('mongoose');

async function main() {
  const mongoURI = process.env.MONGODB_URI;
  await mongoose.connect(mongoURI);
  console.log('Conectou com Mongoose!');
}

main().catch((err) => console.error(err));

module.exports = mongoose;
