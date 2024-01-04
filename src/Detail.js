import React from "react";
import Aside from "./Aside";
import './styles/Shop.css';
import './styles/Detail.css';
import cart from './images/cart.png'
import heart from './images/heart.png'
import data from "./data";

import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function Detail(){
    let [glass] = useState(data);
    let {id} = useParams(); //parameter value파라미터 값 가져오는 훅
    let [number, setNumber] = useState(1) //기본 수량 1 설정(0 안됨)

    //id = 1 => 1-1 = 0  고로 glass[0].quantity = 0
    //data.js quantity를 0->1로 바꾸면 안된다.
    //data를 관리하는 개념 database DB 개념으로 데이터는 아직 장바구니에 담지 않았으므로. 0으로 시작해야한다.
    glass[id-1].quantity = number; //클릭 대상 glass만 
    // console.log('id=',id);

    //plus 버튼 클릭 시 수량 증가 함수
    let handleIncrease = () => {
        if(number < 50){//초기값 기준으로 조건식을 작성해야한다. setNumber 수정용
            setNumber((current)=>current + 1);
            glass[id-1].quantity = setNumber;
        }else{
            alert('최대 구매 수량 : 50')
        }
    }
    //minus 버튼 클릭 시 수량 감소 함수
    let handleDecrease = () => {
        if(number == 1){
            alert('최소 구매 수량 : 1');
            setNumber((current)=>1);
            glass[id-1].quantity = setNumber;
        }else {
            setNumber((current)=>current - 1);
            glass[id-1].quantity = setNumber;
        }
    }

    return (
        <div className="shopWrap">
            <Aside />
            <section>
                {/* img */}
                <div className="photo">
                    <img src={process.env.PUBLIC_URL + '/img/detailImg/PHS4_'+id+'.png'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/img/detailImg/PHS42_'+id+'.png'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/img/detailImg/PHS43_'+id+'.png'} alt="" />
                </div>
                {/* 상품 상세 정보 */}
                <aside className="info">
                    <h1>PHS-1158A Col.4</h1>
                    <p className="price">{glass[id-1].price} WON</p>
                    <ul className="detail_info">
                        <li>LENS WIDTH : {glass[id-1].lens}</li>
                        <li>NOSE BRIDGE : {glass[id-1].nose}</li>
                        <li>FRAME SIDE : {glass[id-1].frame}</li>
                        <li>MATERIAL : {glass[id-1].material}</li>
                    </ul>
                    <form action="" method="get">
                        <div className="frm_info">
                            <button type="button" class="minus" onClick={handleDecrease}>-</button>
                            {/* <input type="text" value="1" name="num" id="num" /> */}
                            {/* input value는 리액트에서 변경하려면 매우 복잡해서 div 로 대체 */}
                            <div id="num">{glass[id-1].quantity}</div>
                            <button type="button" class="plus" onClick={handleIncrease}>+</button>
                            {/* <a href="#" className="cart"><img src={cart} alt="장바구니" /></a> */}
                            {/* cart  get 방식으로 보낸다. post는 처음부터 Hidden으로 넘기기때문에 안보인다. */}
                            <Link to={`/Cart/${id}`} className="cart">
                                <img src={cart} alt="장바구니" />
                            </Link>
                            <a href="#" className="like"><img src={heart} alt="관심상품" /></a>
                        </div>
                        <button type="submit" id="buy">BUY NOW</button>
                    </form>
                    {/* 네이버 간편구매 API 생략 */}
                    {/* <div className="color_list">
                        <h2>COLORS</h2>
                        <div className="list">
                            <a href="#"><img src="" alt="PHS-1158A Col.9" /></a>
                            <a href="#"><img src="" alt="PHS-1158A Col.5" /></a>
                        </div>
                    </div> */}
                </aside>
            </section>
        </div>
    )
}

export default Detail;