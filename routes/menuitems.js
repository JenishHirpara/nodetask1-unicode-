const express = require("express");

const {
  createMenuItem,
  getMenuItems,
  updateMenuItem,
  deleteMenuItem
} = require("../controllers/menuitems");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(getMenuItems)
  .post(createMenuItem);

router
  .route("/:id")
  .put(updateMenuItem)
  .delete(deleteMenuItem);

module.exports = router;
