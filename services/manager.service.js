const ManagerRepository = require("../repositories/manager.repository"); //리포지토리의 내용을 가져와야한다.

class ManagerService {
  managerRepository = new ManagerRepository();

  //관리자 페이지 가져오기
  getManager = async () => {
    const getManager = await this.managerRepository.getManager();
    return getManager;
  };

  //관리자 권한 부여
  newManager = async (userKey, managerId, manager) => {
    const newManager = await this.managerRepository.newManager(userKey);
    return newManager;
  };

  //신고게시글 목록 가져오기, 이중 처리가 완료된 데이터는 가져오지 않음
  allReport = async (managerId, userKey) => {
    const allReport = await this.managerRepository.allReport(
      managerId,
      userKey
    );
    return allReport;
  };

  //신고게시글 제재 먹이기
  punishment = async (managerId, userKey) => {
    const punishment = await this.managerRepository.punishment(
      managerId,
      userKey
    );
    return punishment;
  };
}

module.exports = ManagerService;
