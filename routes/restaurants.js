const express = require("express");
const {
  getRestaurants,
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant
} = require("../controllers/restaurants");
const menuitemRouter = require("./menuitems");

const router = express.Router();

router.use("/:restaurantId/menuitems", menuitemRouter);

router
  .route("/")
  .get(getRestaurants)
  .post(createRestaurant);

router
  .route("/:id")
  .get(getRestaurant)
  .put(updateRestaurant)
  .delete(deleteRestaurant);

module.exports = router;
