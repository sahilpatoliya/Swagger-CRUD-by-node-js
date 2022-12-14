var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signin, signout, signup } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "minimum length is 8 char").isLength({ min: 3 }),
  ],
  signup
);
router.get("/signout", signout);
// router.get("/signout",(req,res)=>{
//     res.send("user signout")
// })
router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 }),
  ],
  signin
);

router.get("/signout", signout);

module.exports = router;
