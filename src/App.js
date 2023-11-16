import Header from './component/Header';
import Footer from './component/Footer';
import Login from './Login';

// App.js 최상단 제어파일이니 나머지 모든 컴포넌트 연결
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>

        <Header />
        <main>
          <div className="bg"></div>
          {/* 삼항 연산자 이용해서 main 안에서 서로 다른 js파일 연결하기 */}
        </main>
        <Footer />
    </Router>
  );
}

export default App;

