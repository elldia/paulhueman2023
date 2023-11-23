import './styles/Join.css';
import Postcode from './Postcode';

function Join(){
    return (
    <div id="joinWrap">
        <h1>JOIN</h1>
        <p>회원가입하시면 폴휴먼의 다양한 혜택을 누리실 수 있습니다.</p>
        <div className="title">
            <h2>회원정보 입력</h2>
            <p>* 필수 입력사항입니다</p>
        </div>
        <form action="#" method="get">
            <dl>
                <dt>아이디</dt>
                <dd><input type="text" name="userId" id="userId" /></dd>
                <dt>비밀번호</dt>
                <dd><input type="password" name="userPw" id="userPw" /></dd>
                <dt>비밀번호 확인</dt>
                <dd><input type="password" name="userPwRe" id="userPwRe" /></dd>
                <dt>이름</dt>
                <dd><input type="text" name="userName" id="userName" /></dd>
                <dt>이메일</dt>
                <dd><input type="email" name="userMail" id="userMail" /></dd>
                <dt>휴대폰번호</dt>
                <dd><input type="tel" name="userPhone" id="userPhone" /></dd>
                <dt>주소</dt>
                <dd>
                    <Postcode />
                    {/* <input type="text" name="post" id="post" />
                    <button type="button" id="userAddSearch">주소 검색</button>
                    <input type="text" name="userAddress" id="userAddress" />
                    <input type="text" name="detailAddress" id="detailAddress" /> */}
                </dd>
                <dt>메일링서비스</dt>
                <dd>
                    <label htmlFor="infoMail">
                        <input type="checkbox" name="infoMail" id="infoMail" />
                        정보 메일을 받겠습니다.
                    </label>
                </dd>
                <dt>SMS 수신여부</dt>
                <dd>
                    <label htmlFor="infoPhone">
                        <input type="checkbox" name="infoPhone" id="infoPhone" />
                        휴대폰 문자메세지를 받겠습니다.
                    </label>
                </dd>
                <dt>자동등록방지</dt>
                <dd>
                    {/* 플러그인(번호) */}
                    <button type="button" id="numVoice">숫자음성듣기</button>
                    <button type="button" id="reset">새로고침</button><br></br>
                    <input type="text" name="numInput" id="numInput" />
                    <span>자동등록방지 숫자를 순서대로 입력하세요.</span>
                </dd>
            </dl>
            <h2>회원가입약관</h2>
            <div className="memberAgree1">
                <p>
                제1조(목적)
                이 약관은 반도옵티칼 주식회사 회사(전자상거래 사업자)가 운영하는 반도옵티칼 주식회사 사이버 몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
                </p>
            </div>
            <label htmlFor="memberAgree1_chk">
                <input type="checkbox" name="memberAgree1_chk" id="memberAgree1_chk" />
                회원가입약관의 내용에 동의합니다.
            </label>
            <h2>개인정보처리방침안내</h2>
            <div className="memberAgree2">
                <p>
                반도옵티칼 주식회사 (이하 “회사”라 함)는 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법 등 개인정보와 관련된 법령상의 규정들을 준수하고 있으며, 개인정보처리방침을 제정하여 이용자의 권익보호에 최선을 다하고 있습니다. 회사는 개인정보처리방침을 통하여 이용자의 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 회사가 어떠한 조치를 취하는지 알려드립니다. 회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.
                </p>
            </div>
            <label htmlFor="memberAgree2_chk">
                <input type="checkbox" name="memberAgree2_chk" id="memberAgree2_chk" />
                개인정보처리방침안내의 내용에 동의합니다.
            </label>
            <p><button type="submit" id="joinBtn">회원가입</button></p>
        </form>
    </div>
    )
}

export default Join;