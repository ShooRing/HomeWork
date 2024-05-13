import './BusinessItem.scss';
const BusinessItem = () => {
    return (
        <li>
            <a href="#">
                <div>
                    <img
                        src="http://www.kyungdong.co.kr/ko/front/image/main/sec01_img01.jpg"
                        alt="국내자원개발"
                    />
                    <span></span>
                </div>
                <h3>
                    국내자원개발<span>Domestic resource</span>
                </h3>
                <p>경동은 수십년간 축적된 경험과 광산운영 전반의 기술력을 보유하고 있습니다.</p>
            </a>
        </li>
    );
};

export default BusinessItem;
