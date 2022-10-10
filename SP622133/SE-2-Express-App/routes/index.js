var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/add", function (req, res, next) {
  const { firstParam, secondParam } = req.body;
  res.send({
    answer: Number(firstParam) + Number(secondParam),
  });
});

module.exports = router;
