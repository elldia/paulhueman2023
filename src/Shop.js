// data.js 가져오는 shop.js
import React, {useState} from "react";
import data from './data';
import './styles/Shop.css';
import { Link } from "react-router-dom";
import Aside from "./Aside";
import Detail from "./Detail"; 

//부모 함수
function Shop(){
    let [glass] = useState(data); //위 import data 변수 저장하기
    return (
        <div className="shopWrap">
            <Aside />
            <section>
                {glass.map((Element,i)=>{
                    return <Card glass={glass[i]} i={i+1}></Card>
                })}
            </section>
        </div>
    )   
}

//자식 함수
//부모에 존재하는 변수를 자식함수에 불러오는 방법 props
//단, props는 부모에서 -> 자식만 가능하다.
function Card(props){
    // console.log(`props=${props}`)
    // 이미지 마우스 오버할때 이미지 변경하기 위한 변수
    let [isHover, setHover] = useState(false);
    const handlerMouseOver = () => {
        setHover(true);
    }
    const handlerMouseOut = () => {
        setHover(false);
    }
    return (
        <div className="item">
            <Link to={`/Detail/${props.glass.id}`}>
                <img 
                    onMouseOver={handlerMouseOver}
                    onMouseOut={handlerMouseOut}
                    src={
                        isHover ?
                        process.env.PUBLIC_URL + '/img/info2_'+props.i+'.png'
                        : process.env.PUBLIC_URL + '/img/origin_'+props.i+'.png'
                        // process.env.PUBLIC_URL + '/img/origin_'+props.i+'.png'
                    } 
                    alt="" 
                />
            </Link>
            <h4>{props.glass.title}</h4> {/* 부모의 props데이터에서 Element 명 설정 */}
            <p>{props.glass.model}</p>
            <p>{props.glass.price}</p>
        </div>
    )
}

export default Shop;