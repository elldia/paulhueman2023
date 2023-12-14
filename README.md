https://paulhueman.co.kr/ko/

# paulhueman homepage url&figzam url
`https://paulhueman.co.kr/ko/`
`https://www.figma.com/file/if9jyRTFdC84F42hnjoPVV/%ED%8F%B4-%ED%9C%B4%EB%A8%BC-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%ED%9A%8D-2023?type=whiteboard&node-id=0%3A1&t=na6FbWcN9BvWiBMJ-1`

* 1차 프로젝트 리스트(필수)
* 메인페이지(index) 10/26 html(react)~
* 로그인(login) 11/9 
* 회원가입(join) 11/9~11/16 기간완성 (api-주소검색, 자동등록방지) 11/23
* SHOP - SUNGLASSES 리스트 페이지 
* 상품상세 페이지 11/30 ~ 12/7 

## 2차 프로젝트리스트(선택)
* 로그인, 회원가입 DB 연동(Node JS)
1. github remote `https://github.com/elldia/paulhueman2023`
2. react install
    `npx create-react-app 설치경로`
    `npx create-react-app paulhueman`
    `npx create-react-app .`
3. 파일 폴더 생성 images/styles/component/
4. font awesome 리액트 설치와 연결
`$ npm i @fortawesome/fontawesome-svg-core`
`$ npm i @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesom`
`free-brands-svg-icons`
`$ npm i @fortawesome/react-fontawesome`
----
`import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';`
`import { 이름1, 이름2 } from '@fortawesome/free-solid-svg-icons';`
----
`<FontAwesomeIcon icon={이름1} />`
`<FontAwesomeIcon icon={이름2} />`

5. 이미지 연결
`import logo from './images/logo.png'`
`import ico_basket from './images/ico_basket.png'`
----
`<h1><a href="#"><img src={logo} alt="paul hueman" /></a></h1>`
----
6. Header 컴포넌트 연결 component/Header.js
* `function Header(){ return ( /*HEader 태그붙여넣기*/ )}`
* 기존 import 붙여넣기 
* `import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';`
* `import { faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons';`
* `import logo from '../images/logo.png'`
* `import ico_basket from '../images/ico_basket.png'`
* `App.js --> import Header from './component/Header'; <Header />`
7. footer 컴포넌트 생성
8. public / index.html 에 title 작성 '폴휴먼'
9. styles/app.css (header, footer) 공통파일 작성, reset 추가 연결
10. styles/index.css (index 파일의 main) 개별파일 작성
--------------------
## 이미지를 import하지 않고 가져다 사용하는 방법
* public 폴더에 이미지를 넣고 사용하면 매번 import를 하지 않아도 된다.
* 단, public에 이미지를 가지고 오면 경로설정의 오류가 출력되므로 아래  
리액트 사이트에서 img경로 설정 부분 복사 붙여넣기 해서 사용한다.
* 리액트 사이트
* `https://create-react-app.dev/docs/using-the-public-folder/`

`return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;`
`<imgsrc={process.env.PUBLIC_URL + '/logo192.png'} width="80%"/>`

## 23/12/14
* 상품 이미지 마우스 hover -> useState 이용 이미지 src 변경하기(Header.js useState참고)
* 위 문제 해결 후 상세페이지 진행 
* Shop.js (Kiosk)
