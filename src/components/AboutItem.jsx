import './AboutItem.scss';
const AboutItem = () => {
    return (
        <li className="AboutItem">
            <a href="#">
                <span>
                    <img
                        src="http://www.kyungdong.co.kr/ko/front/image/main/main_foot_icn01.png"
                        alt="CEO 인사말"
                    />
                </span>
                <strong>
                    <span>CEO 인사말</span>
                    CEO’s Greetings
                </strong>
            </a>
        </li>
    );
};

export default AboutItem;
