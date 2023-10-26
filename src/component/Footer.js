import blog from '../images/icon_blog.png';
import facebook from '../images/icon_facebook.png';
import instar from '../images/icon_instar.png';

function Footer (){
    return (
        <footer>
            <p>
                COMPANY. BANDO OPTICAL CORP. OFFICE. #237 NOWONRO, BUK-GU, DAEGU, SOUTH KOREA<br />
                CEO. LEE SANG TAK LICENSE. 504-81-89393 [COMPANY INFORMATION] MAIL ORDER LICENSE. 2017-DAEGU BUKGU-0094 COPYRIGHT@PAULHUEMAN
            </p>
            <div className="menu">
                <a href="#">terms</a>
                <a href="#">privacy</a>
                <a href="#">inquiry</a>
            </div>
            <div className="ico">
                <a href="#"><img src={blog} alt="블로그" /></a>
                <a href="#"><img src={facebook} alt="페이스북" /></a>
                <a href="#"><img src={instar} alt="인스타그램" /></a>
            </div>
        </footer>
    )
}

export default Footer;