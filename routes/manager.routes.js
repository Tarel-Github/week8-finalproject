const express = require("express");
const router = express.Router();

const auth = require("../middlewares/authMiddleware");

const ManagerController = require("../controllers/manager.controller");
const managerController = new ManagerController();

//관리자 페이지 가져오기
router.get("/manager", auth, managerController.getManager);

//관리자 권한 부여
router.put("/manager/appoint", auth, managerController.newManager);

//관리자 권한 박탈은 필요 없는가??

//신고게시글 목록 가져오기
router.get("/manager/allreport", auth, managerController.allReport);

//신고게시글 제재 먹이기
router.put("/manager/punishment/:targetId", auth, managerController.punishment);

//신고게시글 봐주기
router.put("/manager/forgive", auth, managerController.forgive);

module.exports = router;
