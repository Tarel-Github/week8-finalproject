const express = require('express');
const router = express.Router();

const VoteController = require('./vote.controller');

const voteController = new VoteController;

router.post('/', voteController.createVote);
router.get('/', voteController.allVote);
router.get('/', voteController.myVote);
router.delete;('/', voteController.deleteVote);

module.exports = router;

