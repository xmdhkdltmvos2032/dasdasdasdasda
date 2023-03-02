const express = require("express");
const router = express.Router();
const GET = require("./Get.js");
const POST = require("./Post.js");

router.get("/api/hello",GET.hello)
router.post("/api/itzy",POST.itzy);

module.exports = router;