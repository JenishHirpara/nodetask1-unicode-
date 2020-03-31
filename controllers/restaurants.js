const Restaurant = require("../models/Restaurant");
const ErrorResponse = require("../utils/ErrorResponse");
const asyncHandler = require("../middleware/async");

exports.createRestaurant = asyncHandler(async (req, res, next) => {
  const restaurant = await Restaurant.create(req.body);
  res.status(201).json({ success: true, data: restaurant });
});

exports.getRestaurants = asyncHandler(async (req, res, next) => {
  const restaurants = await Restaurant.find();
  res.status(200).json({ success: true, data: restaurants });
});

exports.getRestaurant = asyncHandler(async (req, res, next) => {
  const restaurant = await Restaurant.findById(req.params.id);
  res.status(200).json({ success: true, data: restaurant });
});

exports.updateRestaurant = asyncHandler(async (req, res, next) => {
  const restaurant = await Restaurant.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );
  res.status(200).json({ success: true, data: restaurant });
});

exports.deleteRestaurant = asyncHandler(async (req, res, next) => {
  const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: true, data: {} });
});
