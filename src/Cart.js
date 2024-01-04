import React, {useState} from "react";
import { useParams } from "react-router-dom";
import data from "./data";
import './styles/Cart.css';

function Cart(){
    let [glass] = useState(data);
    let {id} = useParams();

    console.log(`cart : ${id}`);
    return (
        <div id="cartPage">
            <h1>장바구니</h1>
            <div className="cartWrap">
                <div className="cartItem">
                    <div className="itemTop">
                        <input type="checkbox" name="allChk" id="allChk" />
                        <label htmlFor="allChk">
                            전체선택(
                                <span className="chkItem">0</span>/
                                <span className="allItem">1</span>
                            )
                        </label>
                        <span className="selectRemove">선택삭제</span>
                    </div>
                    <div className="itemList">
                        <div className="cartlist">
                            <div className="left">
                                <input type="checkbox" name="cartChk" id="cartChk1" />
                                <img src={process.env.PUBLIC_URL + '/img/origin_'+id+'.png'} alt="" />
                                <h2>{glass[id-1].model}</h2>
                            </div>
                            {/* <p>{glass[id-1].title}</p> */}
                            <div className="right">
                                <p className="count">
                                    <button type="button" class="minus">-</button>
                                    {glass[id-1].quantity}
                                    <button type="button" class="plus">+</button>
                                </p>
                                <p className="orderPrice">{(glass[id-1].price*glass[id-1].quantity).toLocaleString('ko-kr')}원</p>
                                <p className="remove">
                                    <button type="button" className="removeBtn">X</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cartDetail">
                    <dl>
                        <dt>상품금액</dt>
                        <dd><em className="price">{(glass[id-1].price*glass[id-1].quantity).toLocaleString('ko-kr')}</em>원</dd>
                        <dt>배송비</dt>
                        <dd><em className="deliveryPrice">0</em>원</dd>
                        <dt>결제예정금액</dt>
                        <dd><em className="totalPrice">{(glass[id-1].price*glass[id-1].quantity).toLocaleString('ko-kr')}</em>원</dd>
                    </dl>
                    <button type="button" id="loginBtn">로그인</button>
                    <p className="info">[주문완료] 상태일 경우에만 주문 취소 가능합니다.</p>
                </div>
            </div>
        </div>
    )
}

export default Cart;
