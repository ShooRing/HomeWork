import Nav from '../components/Nav';
import TopMenu from './TopMenu';
import './Headers.scss';

const Headers = () => {
    return (
        <div id="header">
            <div className="inner">
                <h1>
                    <a href="index.html">
                        <img
                            src="http://www.kyungdong.co.kr/ko/front/image/common/logo_pc.png"
                            alt="경동"
                        />
                    </a>
                </h1>
                <Nav />
                <TopMenu />
            </div>
        </div>
    );
};

export default Headers;
