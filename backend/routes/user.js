const express = require('express')
const router = express.Router();
const fetchuser = require('../middleware/fetchUser');
const homeController = require("../controller/homeController");
const Secret = require('../models/Secret')


router.get('/', fetchuser, homeController.home)
router.post('/createSecrets', fetchuser, homeController.createSecrets)
router.post('/deleteSecret', fetchuser, homeController.deleteSecrets)
router.put('/updateSecret/:id', fetchuser,homeController.updateSecrets)

module.exports = router;
