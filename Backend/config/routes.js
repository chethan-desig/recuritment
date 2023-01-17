const express = require("express");
const router = express.Router();
const positionscltr = require("../app/controllers/positionscltr");

router.get("/api/positions", positionscltr.list);
router.post("/api/positions", positionscltr.create);
router.get("/api/positions/:id", positionscltr.show);
router.put("/api/positions/:id", positionscltr.update);

module.exports = router;
