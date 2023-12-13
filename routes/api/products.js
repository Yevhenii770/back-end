const express = require("express");
const ctrl = require("../../controllers/products");
const { validateBody } = require("../../middlewares");
const { shemas } = require("../../models/product");

const router = express.Router();
router.get("/", ctrl.getAll);
router.post("/", validateBody(shemas.addSchema), ctrl.add);
module.exports = router;

// add middlevare admin check
