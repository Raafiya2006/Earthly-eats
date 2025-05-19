import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['vegetables', 'fruits', 'eggs'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  nutritionalInfo: {
    type: String,
    required: true
  },
  farmSource: {
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    }
  },
  harvestDate: {
    type: Date,
    required: true
  },
  isPopular: {
    type: Boolean,
    default: false
  },
  isNew: {
    type: Boolean,
    default: false
  },
  isHydroFresh: {
    type: Boolean,
    default: true
  }
});

export const Product = mongoose.model('Product', productSchema);