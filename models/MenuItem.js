const mongoose = require("mongoose");

const MenuItemSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"]
  },
  description: {
    type: String,
    required: [true, "Please add a description"]
  },
  cost: {
    type: Number,
    required: [true, "Please add cost of this item"]
  },
  type: {
    type: String,
    enum: ["vegetarian", "nonvegetarian", "jain"]
  },
  category: {
    type: String,
    enum: ["Indian", "Chinese", "Mexican", "Italian"]
  },
  restaurant: {
    type: mongoose.Schema.ObjectId,
    ref: "Restaurant",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("MenuItem", MenuItemSchema);
