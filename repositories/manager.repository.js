const { Users, Posts, Comment } = require("../models"); //모델 데이터를 가져오고
const { Op } = require("sequelize");
const Report = require("../schemas/report");

class CommentRepository {
  Comment = new Comment();

  //관리자 페이지 가져오기
  getManager = async () => {
    const getManager = await Comment.create({
      userKey,
      adviceId,
      comment,
    });
    return getManager;
  };

  //관리자 권한 부여
  newManager = async (userKey, grade) => {
    const newManager = await Users.update({ grade }, { where: { userKey } });
    return newManager;
  };

  //신고게시글 목록 가져오기
  allReport = async () => {
    const allReports = await Report.find({ processing: false });
    return allReports;
  };

  //신고게시글 제재 먹이기
  punishment = async (userKey, commentId) => {
    const data = await CommentLike.findOne({
      where: {
        [Op.and]: [{ userKey }, { commentId }],
      },
    });
    return data;
  };

  education = async (targetId) => {};

  forgive = async (targetId) => {};
}

module.exports = CommentRepository;
