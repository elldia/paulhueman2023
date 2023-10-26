import './styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons';
import logo from './images/logo.png'
// import * as images from './images';

function App() {
  return (
    <>
      <header>
        <div className="global_s">
          <h1>global shipping</h1>
          <div className="global_list">
            <a href="#">eng</a>
            <a href="#">chn</a>
          </div>
        </div>
        <h1><a href="#"><img src={logo} alt="paul hueman" /></a></h1>
        <div className="right_box">
          <div className="my_page">
            <h2>마이페이지</h2>
            <div className="my_list">
              <a href="#">my account</a>
              <a href="#">orders</a>
              <a href="#" className="login">login</a>
            </div>
          </div>
          <button type="button" id="cart"><img src="./images/ico_basket.png" alt="장바구니" /></button>
          <form action="#" method="post" id="search_f">
            <input type="text" placeholder="Search" />
            <button type="button" id="search_btn"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </form>
        </div>
      </header>
    </>
  );
}

export default App;
