const express = require("express");
const router = express.Router();

const auth = require("../middlewares/authMiddleware");

const ManagerController = require("../controllers/manager.controller");
const managerController = new ManagerController();

// //관리자 페이지 가져오기
// router.get("/manager", auth, managerController.getManager);

//관리자 권한 부여를 위해 모든 유저 목록을 가져오는 API
//관리자인 사람과 아닌사람을 분리

//유저를 검색하는 기능이 필요할까??

//관리자 권한 부여
router.put("/manager/appoint", auth, managerController.newManager);

//관리자 권한 박탈은 필요 없는가??

//신고게시글 목록 가져오기
router.get("/manager/allreport", auth, managerController.allReport);

//신고게시글 제재 먹이기(처벌할지 안할지 결정)
router.put("/manager/punishment/:reportId", auth, managerController.punishment);

module.exports = router;
