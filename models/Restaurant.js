const mongoose = require("mongoose");

const RestaurantSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
      maxlength: 20
    },
    address: {
      type: String,
      required: [true, "Please add an address"]
    },
    location: {
      //GeoJSON Point
      type: {
        type: String,
        enum: ["Point"]
      },
      coordinates: {
        type: [Number],
        index: "2dsphere"
      },
      formattedAddress: String,
      street: String,
      city: String,
      state: String,
      zipcode: String,
      country: String
    },
    description: {
      type: String,
      required: [true, "Please add a description"]
    },
    website: {
      type: String,
      match: [
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        "Please use a valid URL with HTTP or HTTPS"
      ]
    },
    phone: {
      type: String,
      maxlength: [20, "Phone number can not be longer than 20 characters"]
    },
    email: {
      type: String,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email"
      ]
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

RestaurantSchema.virtual("menuitems", {
  ref: "MenuItem",
  localField: "_id",
  foreignField: "restaurant",
  justOne: false
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
