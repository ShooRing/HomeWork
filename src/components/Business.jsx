import BusinessSet from "./BusinessSet";
import "./Business.scss";

const Business = () => {
  return (
    <div>
      <div className="con-box con1 box1">
        <div className="inner">
          <h2>BUSINESS</h2>
          <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>
          <BusinessSet />
          <p className="more">
            <a href="#">
              <span>
                View more <i className="xi-angle-right"></i>
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Business;
