const mongoose = require('mongoose');

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

module.exports = Tour;
