import AboutSet from "./AboutSet";
import "./About.scss";

const About = () => {
  return (
    <div>
      <div className="con-box con4 box2">
        <div className="inner">
          <div className="left">
            <h2>
              ABOUT <span>KYUNGDONG</span>
            </h2>
            <p>
              서민연료인 연탄에서 신재생 에너지까지 에너지를 통한
              <br />
              따뜻한 삶의 공간 창조 바로 경동이 함께합니다.
            </p>
            <p className="more">
              <a href="#">
                <span>View more</span>
              </a>
            </p>
          </div>
          <AboutSet />
        </div>
      </div>
    </div>
  );
};

export default About;
