const ManagerService = require("../services/manager.service");

class ManagerController {
  managerService = new ManagerService();

  getManager = async (req, res, next) => {
    try {
      const { userKey, grade } = res.locals.user;

      if (userKey == 0) {
        return res.status(400).send({ message: "로그인이 필요합니다." });
      }
      if (grade == 0 || grade == null) {
        return res.status(400).send({ message: "당신은 관리자가 아닙니다." });
      }

      const getManager = await this.managerService.getManager();
      res.status(201).send({ Message: "관리자 모드.", data: getManager });
    } catch (error) {
      next(error);
    }
  };

  newManager = async (req, res, next) => {
    try {
      const { userKey } = req.body; //권한을 부여할 대상

      if (userKey == 0 || userKey == null) {
        return res.status(400).send({ message: "이 사람 없는 사람인데요?" });
      }

      const newManager = await this.managerService.updateManager(userKey);

      res.status(200).json({ Message: "권한이 부여되었습니다." });
    } catch (error) {
      next(error);
    }
  };

  //모든 신고글 가져오기
  allReport = async (req, res, next) => {
    try {
      const { userKey, grade } = res.locals.user;

      if (userKey == 0) {
        return res.status(400).send({ message: "로그인이 필요합니다." });
      }
      if (grade == 0 || grade == null) {
        return res.status(400).send({ message: "당신은 관리자가 아닙니다." });
      }
      const allReport = await this.managerService.allReport();
      res.status(200).json({ Message: "모든 신고 모음", data: allReport });
    } catch (error) {
      next(error);
    }
  };

  //처벌
  punishment = async (req, res, next) => {
    try {
      const { targetId } = req.params;
      const { userKey, grade } = res.locals.user;

      if (userKey == 0) {
        return res.status(400).send({ message: "로그인이 필요합니다." });
      }
      if (grade == 0 || grade == null) {
        return res.status(400).send({ message: "당신은 관리자가 아닙니다." });
      }

      const Likes = await this.managerService.updateManagerLike(
        userKey,
        managerId
      );
      const count = await this.managerService.countManager(commentId);

      res.status(200).json({ Message: "참교육 성공", data: Likes });
    } catch (error) {
      next(error);
    }
  };

  forgive = async (req, res, next) => {
    try {
      res.status(200).json({ Message: "봐줌", data: Likes });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = ManagerController;
