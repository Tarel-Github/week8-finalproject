require('dotenv').config();                       //환경변수(.env)파일을 사용
const express = require("express");               //익스프레스 사용 명령어

//const router = require('./src/api/index');                //index 파일 가져옴
const app = express();                            //익스프레스를 app에 정의

app.use(express.json());                          //json 파일을 서버 정보 주고 받는 것에 사용한다.
app.use(express.urlencoded({extended:false}));

//app.use('/', router); // 라우터 등록

app.listen(process.env.PORT, () => {
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ "+process.env.PORT + "번 서버를 가동합니다"+" ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 명령 대기중 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
});
