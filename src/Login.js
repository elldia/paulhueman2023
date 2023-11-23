import './styles/Login.css';
import { Link } from 'react-router-dom';

function Login(){
    return(
        <div className="loginWrap">
            <h1>LOGIN</h1>
            <p>로그인 하시면 폴 휴먼의 다양한 혜택을 누리실 수 있습니다.</p>
            <div className="login">
                <form action="#" method="post">
                    <fieldset>
                        <input type="text" placeholder="아이디" id="user_id" />
                        <input type="password" placeholder="비밀번호" id="user_pw" />
                        <span>
                            <button type="submit" id="login_btn">로그인</button>
                            <Link to="/join" id="join">회원가입</Link>
                        </span>
                    </fieldset>
                </form>
                <div className="id_pw_search">
                    <span>아이디 또는 비밀번호를 잊어버리셨나요?</span>
                    <a href="#">아이디/비밀번호 찾기</a>
                </div>
            </div>
        </div>
    )
}

export default Login;