https://paulhueman.co.kr/ko/

0. paulhueman homepage url&figzam url
    https://paulhueman.co.kr/ko/
    https://www.figma.com/file/if9jyRTFdC84F42hnjoPVV/%ED%8F%B4-%ED%9C%B4%EB%A8%BC-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%ED%9A%8D-2023?type=whiteboard&node-id=0%3A1&t=na6FbWcN9BvWiBMJ-1

    * 1차 프로젝트 리스트(필수)
        메인페이지(index) 10/26 html(react)~
        로그인(login) 11/9 
        회원가입(join) 11/9~11/16 기간완성 (api-주소검색, 자동등록방지) 11/23
        SHOP - SUNGLASSES 리스트 페이지 
        상품상세 페이지 11/30 ~ 12/7 

    * 2차 프로젝트리스트(선택)
        로그인, 회원가입 DB 연동(Node JS)

1. github remote
    https://github.com/elldia/paulhueman2023

2. react install
    npx create-react-app 설치경로
    npx create-react-app paulhueman
    npx create-react-app .

3. 파일 폴더 생성 images/styles/component/

4. font awesome 리액트 설치와 연결
    $ npm i @fortawesome/fontawesome-svg-core
    $ npm i @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
    $ npm i @fortawesome/react-fontawesome

    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { 이름1, 이름2 } from '@fortawesome/free-solid-svg-icons';

    <FontAwesomeIcon icon={이름1} />
    <FontAwesomeIcon icon={이름2} />

5. 이미지 연결
    import logo from './images/logo.png'
    import ico_basket from './images/ico_basket.png'

    <h1><a href="#"><img src={logo} alt="paul hueman" /></a></h1>

6. Header 컴포넌트 연결 component/Header.js
    function Header(){ return ( /*HEader 태그붙여넣기*/ )}
    기존 import 붙여넣기 
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons';
    import logo from '../images/logo.png'
    import ico_basket from '../images/ico_basket.png'

    App.js --> import Header from './component/Header'; <Header />

7. footer 컴포넌트 생성
8. public / index.html 에 title 작성 '폴휴먼'
9. styles/app.css (header, footer) 공통파일 작성, reset 추가 연결
10. styles/index.css (index 파일의 main) 개별파일 작성

--------------------


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
