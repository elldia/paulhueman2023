import Header from './component/Header';
import Footer from './component/Footer';
import Home from './Home';
import Login from './Login';
import Join from './Join';
import Shop from './Shop';

// App.js 최상단 제어파일이니 나머지 모든 컴포넌트 연결
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  /* const [currentRoute, setCurrent] = useState('/');
  const Header = ({currentRoute}) => {
    return (
      <header className={currentRoute === '/' ? "top_sub" : "a"}>aaa</header>
    )
  } */
  return (
    <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Join" element={<Join />} />
            <Route path="/Shop" element={<Shop />} />
          </Routes>
        </main>
        <Footer />
    </Router>
  );
}

export default App;