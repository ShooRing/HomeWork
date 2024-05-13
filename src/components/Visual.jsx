import './Visual.scss';

const Visual = () => {
    return (
        <section id="visual">
            <ul className="main-banner">
                <div className="inner">
                    <div className="txt">
                        <h2>
                            Global Kyungdong <br />
                            with customer trust
                        </h2>
                        <p>고객이 신뢰하는 글로벌 에너지 선도 기업</p>
                        <p className="more">
                            <a href="#">
                                Learn More <i className="xi-angle-right"></i>{' '}
                            </a>
                        </p>
                    </div>
                </div>
            </ul>

            <p className="btn-wrap">
                <button className="btn prev">
                    <img src="images/main/btn_prev2.png" alt="" />
                </button>
                <button className="btn next">
                    <img src="images/main/btn_next2.png" alt="" />
                </button>
            </p>
            <p className="scroll">
                <img src="images/main/scroll.png" alt="" />
            </p>
        </section>
    );
};

export default Visual;
