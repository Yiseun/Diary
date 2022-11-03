# 🍅  단 감

감정 단어 일기


## DESCRIPTION 👨‍💻

사용자가 작성하는 일기를 DB 에 저장하고,
그 일기데이터에 입력된 감정데이터를 기반으로 감정 빈도를 분석해 차트로 표현해 출력해보자!<br/>
<br/>

---

## MEMBERS 🙍‍♂️🙍‍♀️🙍‍♂️

- 이세운 - 백엔드
- 문선화 - 프론트엔드
- 김도현 - 백엔드, 프론트엔드

<br/>

---

## PROJECT TREE 🎉

*service architecture*<br/>
![Untitled (1)](https://user-images.githubusercontent.com/92356170/199652001-9559a6ff-2075-40ca-8452-50a6161165d9.jpg)


*service flow*<br/>
![serviceflow](https://user-images.githubusercontent.com/98632452/174228495-9e8228ad-7b68-4211-866d-3831dd8f43e6.png)
<!-- 여기수정 -->

*data table*
![datatable](https://user-images.githubusercontent.com/98632452/174233328-c7fa7dc4-4feb-49f8-adbe-be82edef33a4.png)


<br/>

*tree*<br/>
![tree](https://user-images.githubusercontent.com/98632452/174227908-51c696ee-dbf2-48d5-8286-0f5acfa33d53.png)
<!-- 여기수정 (도커컴포즈 바탕으로)-->

---
## 일기 작성 📹


![talkv_wro07C0f8a_tdFSfjgFRNKaIhmTWHNhp0_talkv_high](https://user-images.githubusercontent.com/98632452/174240072-7facf076-85d5-43da-b62c-3c91d67ab6a7.gif)



---

## DESCRIPTION & UI 🎨

*main calendar*<br/>
![MAINCALLENDAR](https://user-images.githubusercontent.com/98632452/174229212-22905cc4-beff-4cf3-be21-77fffca8f5c4.png)

<br/>
1. 메인 페이지 에서는 달력이 표시되어, 바로 날짜를 선택할 수 있도록 했습니다.
<br/>
2. 로그인을 하지 않았다면 회원가입 및 로그인을 해야합니다.
<br/>
<br/>
<br/>

*login*
![image](https://user-images.githubusercontent.com/98632452/174230517-1ba8f66f-3ebe-433d-b798-2666c012c646.png)





*post diary*<br/>
![CHOOSEEMOTION](https://user-images.githubusercontent.com/98632452/174227690-04700628-1320-469e-952a-bdf160b30e0b.png)

<br/>
3. 메인페이지에서 일기를 작성할 날짜를 선택하면, 감정 카테고리 8가지 중 하나를 선택할 수 있고,<br/>
4. 감정 카테고리 중 하나를 선택하면 해당 감정 카테고리에 속한 감정들이 표시됩니다.<br/>
5. 아래에 있는 슬라이드를 통해 감정의 강도를 조정하며 그에 맞게 표시되는 감정 단어들을 확인할 수 있습니다.

<br/>
<br/>
<br/>

*mypage - post analyzer*<br/>
![mypage](https://user-images.githubusercontent.com/98632452/174232166-f49fc413-3179-4948-af58-938a66294fac.png)

<br/>
6. 마이페이지에서는 자신이 작성한 일기에 포함된 감정들의 빈도를 그래프를 통해 표시해줍니다. ( 주간 / 월간 / 총 )<br/>
7. 그래프 아래 쪽에는 기간에 따라 가장 많이 작성된 감정을 카드형태로 표시하고, 그 감정이 들어있는 문장을 추출해 나타냅니다.






---
## ❌ TROUBLESHOOTING 😢


- 로그인 기능 실패❌<br/> 회원가입을 하고 로그인 화면에서 데이터베이스로 데이터를 넘기고 true, false 를 확인할 수 있었지만, 로그인 뒤에 세션으로 유지하는 기능까지는 구현하지 못함
- 일기 데이터를 가져온 뒤 차트에 적용시키기 실패❌<br/> 데이터베이스에 쌓인 감정 데이터를 계산하는 데 까지는 했으나, 차트에 표현은 구현하지 못함.


---

## 느낀점

### 👩‍🎨 문선화
기술 부채로 구현이 얼마나 늦어지는지 잘 느낄 수 있었던 프로젝트습니다. 미니프로젝트만 하다가 기획부터 실제 구현까지 진행하는 프로젝트를 진행해보니 앞으로 어떤 것들을 공부해야할지
가이드라인이 생긴 것 같아 좋았습니다. 이제 뒤늦은 트러블 슈팅을 시작해봐야겠습니다... 그리고 우리팀! 구현이 잘 안되서 힘든 상황에도 웃으면서 재밌게 프로젝트 할 수 있어서 너무 좋았습니다. 모르는 부분 도와주신 다른 팀분들도 너무 감사했습니다. 이 수업을 통해 개발자의 길로 들어서면서 함께할 든든한 동료들이 생겨서 너무 기쁩니다. 모두 피곤하셨습니다.🙆‍♀️

### 👨‍💻 이세운
기술명세를 아주 자세하게 작성하는게 도움이 될것같았습니다
그리고 개인역량을 감안하여 기술별로 시간분배를 하고 그 시간이 넘어가게 되면 과감하게 버리거나 다른 부가적인 기능을 버려서 그 부가적인 기능 시간을 사용하는등 그러한 결단력이 필요하다고 느꼈습니다 

### 🤡 김도현
왜 안 되는지 왜 되는지 몰라 나중에 이와 비슷한 작업을 해야할 때가 왔을 때, 그 때도 지금처럼 못 할 것 같아 너무나 속상합니다.
더 열심히 복습하고 공부해야겠습니다. 라는 생각을 4번째 하고 있습니다.

---

## TECH STACK

- JAVA
- JavaScript
- SPRINGBOOT 2.7.0
- MySQL
- REACT
- Next.js
- SPARK
- DOCKER
- HADOOP
- JENKINS
- KAFKA

`Prerequisite`
JDBC, lombok, jackson.core, react-chartjs-2, styled-components, next-images

`Tools`
Intelli J , SPRINGBOOT, VS CODE

----

## REFERENCE

- `단어의 감정을 수치화해놓은 자료`<br/>
한국어 감정표현단어의 추출과 범주화 - 감성과학, VOL 15, 2012<br/>
*emotion table*<br/>
![감정단어표](https://user-images.githubusercontent.com/98632452/174223736-b2470d10-275d-4989-8f4b-819b0e2786d8.png)
