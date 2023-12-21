import React from "react";
import Aside from "./Aside";
import './styles/Shop.css';
import './styles/Detail.css';
import cart from './images/cart.png'
import heart from './images/heart.png'
import data from "./data";

import { useParams } from "react-router-dom";
import { useState } from "react";

function Detail(){
    let [glass] = useState(data);
    let {id} = useParams();
    console.log('id=',id);
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
                    <p className="price">{glass[id].price} WON</p>
                    <ul className="detail_info">
                        <li>LENS WIDTH : {glass[id].lens}</li>
                        <li>NOSE BRIDGE : {glass[id].nose}</li>
                        <li>FRAME SIDE : {glass[id].frame}</li>
                        <li>MATERIAL : {glass[id].material}</li>
                    </ul>
                    <form action="" method="get">
                        <div className="frm_info">
                            <button type="button" class="minus">-</button>
                            <input type="text" value="1" name="num" id="num" />
                            <button type="button" class="plus">+</button>
                            <a href="#" className="cart"><img src={cart} alt="장바구니" /></a>
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