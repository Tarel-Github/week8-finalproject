const express = require('express');
const router = express.Router();

const vote = require('./vote/vote.route');

router.use('/user', vote);

module.exports = router;
