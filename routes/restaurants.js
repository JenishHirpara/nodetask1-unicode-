const express = require("express");
const {
  getRestaurants,
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant
} = require("../controllers/restaurants");
const menuitemRouter = require("./menuitems");

const { protect } = require("../middleware/auth");

const router = express.Router();

router.use("/:restaurantId/menuitems", menuitemRouter);

router
  .route("/")
  .get(getRestaurants)
  .post(protect, createRestaurant);

router
  .route("/:id")
  .get(getRestaurant)
  .put(protect, updateRestaurant)
  .delete(protect, deleteRestaurant);

module.exports = router;
