import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png'
import ico_basket from '../images/ico_basket.png'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Cart from '../Cart';


// 각 js의 필요한 Link만 연결
import { Link } from 'react-router-dom';

function Header(){
  let { id } = useParams();
  //header_top부분 배경색 변경하기 위한 변수 지정
    const [isSwitched, setIsSwitced] = useState(false);
    //isSwitched가 (!)반대므로 false 의 반대 -> false의 부정 => true
    const switchHandler = () => { //서브메뉴용
      setIsSwitced(true);
    }
    const switOrigin = () => { //인덱스용
      setIsSwitced(false);
    }
      
    const [ Header, setHeader ] = useState(document.querySelector('header .top'));
    console.log('Header->', Header)
    return (
        <header className="" style={{
          background:isSwitched ? '#fff' : 'transparent',
          height:isSwitched ? '170px' : 'max-content'
        }}>
        <div /* 추가 */
          style={{
            background:isSwitched ? 'rgb(59,59,59)' : 'transparent',
            color:isSwitched ? '#fff' : '#111',
            height:isSwitched ? '40px' : '60px',
            
          }}
          className="top">
          <div className="global_s">
            <h1>global shipping</h1>
            <div className="global_list">
              <a href="#">eng</a>
              <a href="#">chn</a>
            </div>
          </div>
          <div className="right_box">
            <div className="my_page">
              <h2>마이페이지</h2>
              <div className="my_list">
                <a href="#">my account</a>
                <a href="#">orders</a>
                {/* 수정 (클릭하면 true로 변경되고 위 div style을 상황에 따라 true , false로 변경한다)*/}
                <Link to={'/Login'} className="login" onClick={switchHandler}>Login</Link>
              </div>
            </div>
            <Link to={`/Cart/${id}`} 
              id="cart" 
              style={{
              filter:isSwitched ? 'invert(1)' : 'invert(0)'
            }}>
              <img src={ico_basket} alt="장바구니" />
            </Link>
            <form action="#" method="post" id="search_f">
              <input type="text" placeholder="Search" style={{
                borderBottom:isSwitched ? '2px solid #fff': '2px solid #111',
                color:isSwitched ? '#fff' : '#000',
              }} />
              <button type="button" id="search_btn" style={{
                filter:isSwitched ? 'invert(1)' : 'invert(0)',
              }}>
                <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>
          </div>
        </div>
        <h1>
          <Link to="/"  onClick={switOrigin} 
            style={{
                position:isSwitched ? 'relative' : 'static',
                top:isSwitched ? '30px' : '0',
          }}>
            <img src={logo} alt="paul hueman" />
          </Link>
        </h1>
        <nav style={{
                paddingTop:isSwitched ? '40px' : '0',
          }}>
          <ul className="gnb">
            <li>{/* <a href="#">shop</a> */}
            <Link to={'/Shop'}  onClick={switchHandler}>shop</Link>
              <ul className="sub">
                <li><a href="#">sunglasses</a></li>
                <li><a href="#">glasses</a></li>
              </ul>
            </li>
            <li><a href="#">brand</a></li>
            <li><a href="#">campaign</a>
              <ul className="sub">
                <li><a href="#">celeb</a></li>
                <li><a href="#">lookbook</a></li>
                <li><a href="#">video</a></li>
                <li><a href="#">media </a></li>
              </ul>
            </li>
            <li><a href="#">stockists</a></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;