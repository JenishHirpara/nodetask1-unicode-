const MenuItem = require("../models/MenuItem");
const Restaurant = require("../models/Restaurant");
const ErrorResponse = require("../utils/ErrorResponse");
const asyncHandler = require("../middleware/async");

exports.createMenuItem = asyncHandler(async (req, res, next) => {
  req.body.restaurant = req.params.restaurantId;
  const menuitem = await MenuItem.create(req.body);
  res.status(201).json({ success: true, data: menuitem });
});

exports.getMenuItems = asyncHandler(async (req, res, next) => {
  if (req.params.restaurantId) {
    const menuitems = await MenuItem.find({
      restaurant: req.params.restaurantId
    });
    return res.status(200).json({
      success: true,
      count: menuitems.length,
      data: menuitems
    });
  } else {
    const menuitems = await MenuItem.find();
    res.status(200).json({ success: true, data: menuitems });
  }
});

exports.updateMenuItem = asyncHandler(async (req, res, next) => {
  const menuitem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  res.status(200).json({ success: true, data: menuitem });
});

exports.deleteMenuItem = asyncHandler(async (req, res, next) => {
  const menuitem = await MenuItem.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: true, data: {} });
});
