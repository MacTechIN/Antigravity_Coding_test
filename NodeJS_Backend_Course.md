# 🎓 NodeJS Backend Course: The Apartment Project Full Transcript

> **Professor**: Antigravity  
> **Student**: [Your Name]  
> **Theme**: Learning Backend Development through the analogy of building an Apartment Complex.

---

### 📝 Course Transcript & Lecture Notes

#### [Step 1] 아파트 건설 사업자 등록 (Initial Setup)
**교수님의 설명:**
"자네가 지금 백엔드 개발을 시작하는 건, 아무것도 없는 빈 땅에 거대한 아파트 단지를 짓는 것과 같네. 아파트를 지으려면 무작정 삽부터 들면 안 되겠지? 가장 먼저 해야 할 일은 구청에 가서 '이 땅에 이런 아파트를 지을 겁니다'라고 신고하고, '입주 관리 대장'을 만드는 것이네."

- **명령어**: `npm init -y`
- **의미**: 아파트 건설 사업자 등록을 하는 행위.
- **결과물**: `package.json` (아파트 종합 관리 대장).

#### [Step 2] 전문 건축 업체 계약하기 (Express Installation)
**교수님의 설명:**
"벽돌 하나하나, 시멘트 하나하나 우리가 직접 다 만들려면 너무 힘들다네. 그래서 우리는 'Express'라는 아주 유능하고 유명한 '전문 건축 업체'를 고용할 거야. 이 업체는 웹사이트라는 건물을 짓는 데 필요한 모든 기본 골조(벽돌, 기둥, 배관 시스템)를 이미 다 가지고 있어서, 우리는 그 위에 우리가 원하는 대로 디자인만 하면 된다네."

- **명령어**: `npm install express`
- **비유**: 건설 업체 Express를 우리 단지로 불러오는 명령.
- **결과물**: `node_modules` (자재 창고).

#### [Step 3] 아파트 정문과 경비실 만들기 (The Server)
**교수님의 설명:**
"아무리 멋진 아파트를 지어도 손님이 들어올 '정문'이 없으면 안 되겠지? 그리고 그 정문을 지키며 손님을 안내해줄 '경비실'도 필요하다네. `app.listen(3000)`은 아파트 정문에 '3000번'이라는 푯말을 붙인 '경비실'을 세우는 거라네."

#### [Step 4] 정문 손님에게 인사하기 (Routing)
**교수님의 설명:**
"손님이 특정 메시지를 들고 왔을 때, 어떤 대답을 해줄지 미리 정해두는 과정을 전문 용어로 'Routing'이라고 한다네. `app.get('/')`은 아파트 정문에 손님이 '구경(GET)'하러 왔을 때를 말하지."

- **`req` (Request)**: 손님이 가져온 질문지나 택배.
- **`res` (Response)**: 우리 경비원이 손님에게 돌려주는 안내 책자나 답변.

#### [Step 5] 인공지능 경비실장 고용 (Nodemon)
**교수님의 설명:**
"코드를 한 줄 고칠 때마다 무전기를 끄고 다시 켜는 건 번거롭지. 그래서 우리는 'Nodemon'이라는 '인공지능 경비실장'을 고용할 거야. 이 실장은 코드가 바뀌는 즉시 알아서 경비실을 새로고침해준다네."

- **명령어**: `npm install --save-dev nodemon`
- **설정**: `package.json`의 `"scripts"`에 `"dev": "nodemon index.js"` 추가.

#### [Step 6] 입주민 정보 전달하기 (JSON Data)
**교수님의 설명:**
"실제 아파트 시스템은 '101호에 누가 사는지' 같은 구체적인 정보를 주고받아야 하네. 정보를 아주 깔끔한 '표'나 '양식지'에 적어서 딱딱 맞춰 보내주는 것이 JSON이라네."

- **명령어**: `res.json(residents)`

#### [Step 7] 특정 입주민만 찾아보기 (Route Parameters)
**교수님의 설명:**
"손님이 오면 '101호에 계신 분 면회 왔는데요'라고 구체적으로 묻곤 하지. 이때 사용하는 것이 'URL 파라미터'라네. 정문에 붙여놓은 '빈 칸(:id)' 같은 거라 생각하게."

- **코드**: `app.get('/residents/:id', ...)`
- **`req.params`**: 손님이 써넣은 빈 칸의 내용을 확인하는 것.

#### [Step 8] 아파트 관리 사무소 내부 수리 (Middleware)
**교수님의 설명:**
"손님이 가져온 짐(Data)을 경비실에서 제대로 풀어서 확인하려면, '짐 풀기 전용 도구(Middleware)'가 필요하다네. `app.use(express.json())`은 경비실에 '자동 택배 분류기'를 설치하는 것과 같지."

- **코드**: `app.use(express.json())`

#### [Step 10] 새로운 이웃 입주시키기 (POST Method)
**교수님의 설명:**
"실제 아파트처럼 새로운 주민이 이사를 오는 상황을 만들어 볼 거네. `app.post('/residents')`는 아파트 관리 사무소의 '입주 신청 창구'라네. 주민이 되고 싶은 사람이 신청서를 들고 오는 곳이지."

- **`req.body`**: 손님이 들고 온 입주 신청서 내용.
- **`residents.push()`**: 신청서를 우리 공식 명부에 집어넣는 행위.
- **상태 코드 `201`**: 성공적으로 새로운 것이 만들어졌다는 신호.

#### [Step 11] 입주 신청 테스트하기 (Postman/Thunder Client)
**교수님의 설명:**
"우리가 만든 POST 기능은 브라우저 주소창만으로는 테스트할 수 없네. 그래서 'Thunder Client' 같은 전문 도구를 사용해야 하지. 마치 온라인으로 입주 신청서를 제출하는 전용 앱을 사용하는 것과 같다고 생각하게."

- **Tool**: VS Code Extension 'Thunder Client' 추천.
- **Method**: `POST` 선택.
- **URL**: `http://localhost:3000/residents`.
- **Body**: JSON 형식으로 데이터 작성 (`{ "name": "...", "unit": "..." }`).

---
*Next Lecture: 입주민 정보 수정 및 퇴거(PUT & DELETE)*
