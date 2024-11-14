const express = require("express");
const router = express.Router();
const catalogController = require("../controllers/catalogController");
router.get("/", catalogController.getAllCataloges);
router.post("/", catalogController.createCatalogRecord);
router.get("/:id", catalogController.getCatalogById);
router.put("/:id", catalogController.updateCatalog);
router.delete("/:id", catalogController.deleteCatalog);

module.exports = router;