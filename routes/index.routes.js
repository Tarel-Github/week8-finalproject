const express = require("express");
const router = express.Router();
const userRouter = require("./user.routes");
const adviceRouter = require("./advice.routes");

const choiceRouter = require("./choice.routes");
const commentRouter = require("./comment.routes");


router.use("/", userRouter);

// 게시글 작성
router.use("/post", adviceRouter);

// 조언 게시글 조회
router.use("/advice", adviceRouter);

// 투표 게시글 관련
router.use("/choice", choiceRouter);

// 조언 게시글의 덧글 관련
router.use("/advice/comment", commentRouter);


module.exports = router;
