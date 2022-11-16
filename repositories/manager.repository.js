const { Users, Posts, Comment, CommentLike } = require("../models"); //모델 데이터를 가져오고
const { Op } = require("sequelize");

class CommentRepository {
  Comment = new Comment();

  //관리자 페이지 가져오기
  getManager = async (userKey, adviceId, comment) => {
    const createCommentData = await Comment.create({
      userKey,
      adviceId,
      comment,
    });
    return createCommentData;
  };

  //관리자 권한 부여
  newManager = async (userKey, commentId, comment) => {
    const data = await Comment.findByPk(commentId);
    const dataId = data.userKey;

    const updateCommentData = await Comment.update(
      { comment },
      { where: { commentId } }
    );
    return updateCommentData;
  };

  //신고게시글 목록 가져오기
  allReport = async (commentId, userKey) => {
    console.log(commentId);
    //하위 데이터 전부 삭제
    const data = await CommentLike.destroy({
      where: {
        [Op.and]: [{ commentId }],
      },
    });
    const deleteCommentData = await Comment.destroy({
      where: { commentId, userKey },
    });

    return deleteCommentData;
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
}

module.exports = CommentRepository;
