const express = require("express");

const {
  createMenuItem,
  getMenuItems,
  updateMenuItem,
  deleteMenuItem
} = require("../controllers/menuitems");

const { protect } = require("../middleware/auth");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(getMenuItems)
  .post(protect, createMenuItem);

router
  .route("/:id")
  .put(protect, updateMenuItem)
  .delete(protect, deleteMenuItem);

module.exports = router;
