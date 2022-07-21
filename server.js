require('dotenv').config();

const mongoose = require('mongoose');

// 0. Get App
const app = require('./app');

// dotenv.config({ path: './config.env' });

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

// Describe Schema / Data
const toursSchema = new mongoose.Schema({
  // Schema type
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  rating: { type: Number, default: 4.5 },
  price: { type: Number, required: [true, 'A tour must have price'] },
});

// Describe your model from tours schema
const Tour = mongoose.model('Tour', toursSchema);

const testTour = new Tour({
  name: 'The Park Camper',
  price: 497,
});

testTour
  .save()
  .then((doc) => {
    console.log(`Final Document ${doc}`);
  })
  .catch((err) => {
    console.log(`Document insert failed due to ${err}`);
  });

// this env is set by express
// console.log(app.get("env"));

// Process ENV by default by node
// console.log(process.env);

// console.log(process.env.NODE_ENV);

// 2. Run application
app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
