require('dotenv').config();

const mongoose = require('mongoose');
const fs = require('fs');
const Tour = require('./../../models/tourModels');

// dotenv.config({ path: './.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    // .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    // console.log(con.connections);
    console.log(`Connection Successful!`);
  });

//   READ JSON FILE

const tours = JSON.parse(fs.readFileSync('tours-simple.json', 'utf-8'));

// IMPORT Data into Database
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data Successfully loaded');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// Delete all data from collection

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data Successfully deleted');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// deleteData();

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
