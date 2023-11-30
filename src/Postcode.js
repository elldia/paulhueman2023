import React from "react";
import DaumPostcode from "react-daum-postcode";
import Modal from 'react-modal';
import { useState } from "react";

const Postcode = () => {
//초기값 (빈값 설정되어있으며 수정될 경우 setZipCode등으로 인식)
const [zipCode, setZipcode] = useState(''); //국가기초구역번호 2015년 8/1 시행 새 우편번호
const [Address, setAddress] = useState(''); //주소
const [isOpen, setIsOpen] = useState(false); //검색버튼 누르기 전

const completeHandler = (data) => {
    //우편번호 검색 도로명 또는 지역명으로 입력
    let addr = '';
    if (data.userSelectedType === 'R'){
        addr = data.roadAddress; //도로명 주소
    }else {
        addr = data.jibunAddress; //지역명 주소
    }
    setZipcode(data.zonecode);
    setAddress(addr);
    setIsOpen(false);
}

//Modal 스타일
const customStyles = {
    overlay: {
        display:'block',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    content: {
      left: '0',
      margin: 'auto',
      width: '500px',
      height: '600px',
      padding: '0',
      overflow: 'hidden',
    },
};

//검색 클릭
const toggle = () => {
    setIsOpen(!isOpen);
    // setIsOpen이 변경되는 변수명이니까 false를 가지고 있는
    //isOpen의 값을 true로 변경한다(검색버튼을 누르면)
}

    return (
        <div>
            <input type='text' value={zipCode} readOnly placeholder="우편번호" name="post" id="post" />
            <button type='button' onClick={toggle} id="userAddSearch">우편번호 검색</button>
            <br />
            <input type='text' value={Address} readOnly placeholder="도로명 주소" name="userAddress" id="userAddress" />
            <input type='text' placeholder="상세 주소" name="detailAddress" id="detailAddress" />
            <br />
            <Modal 
                isOpen={isOpen} 
                ariaHideApp={false} 
                style={customStyles}
                // 내장된 스크립트 onRequestclose로 모달 배경 클릭 시 false로 변경하기(버튼 숨김 후 이걸로 처리)
                onRequestClose={()=>setIsOpen(false)}
            >
                {/* <button type='button' onClick={()=>setIsOpen(false)} id="modalClose">닫기</button> */}
                {/* <DaumPostcode onComplete={completeHandler} height="100%" /> */}
                <div className="bbb">test</div>
                {/* 모달 라이브러리를 사용하면 다음 우편번호 뿐만 아니라 다른 요소의
                크기를 지정해서 사용할 수 있다.(리액트 안 라이브러리 활용 구조) */}
            </Modal>
        </div>
    )
}

export default Postcode;