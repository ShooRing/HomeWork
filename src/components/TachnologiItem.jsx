import './TachnologiItem.scss';

const TachnologiItem = () => {
    return (
        <li>
            <div>
                <a href="#">
                    <img
                        src="http://www.kyungdong.co.kr/ko/front/image/main/sec02_img01.jpg"
                        alt="경동의 신기술"
                    />
                    <h3>
                        경동의 신기술<span>Technology</span>
                    </h3>
                    <b>
                        <i className="xi-arrow-down"></i>
                    </b>
                </a>
            </div>
            <p>
                경동은 지속적인 기술개발과 투자로 국내광산
                <br />
                최고의 기술력을 자랑하고 있습니다.
            </p>
            <p className="more">
                <a href="#">
                    <span>
                        View more <i className="xi-angle-right"></i>
                    </span>
                </a>
            </p>
        </li>
    );
};

export default TachnologiItem;
