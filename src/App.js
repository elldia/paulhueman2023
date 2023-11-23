import Header from './component/Header';
import Footer from './component/Footer';
import Home from './Home';
import Login from './Login';
import Join from './Join';

// App.js 최상단 제어파일이니 나머지 모든 컴포넌트 연결
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Join" element={<Join />} />
        </Routes>

        <Header />
        <Footer />
    </Router>
  );
}

export default App;

