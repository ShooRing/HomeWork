import Main from './Main';
import Visual from './Visual';
import './Wrap.scss';

const Wrap = () => {
    return (
        <>
            <Visual />
            <Main />
            <nav id="gnb">
                <li className="on">
                    <a href="#">MAIN</a>
                </li>
                <li>
                    <a href="#">BUSINESS</a>
                </li>
                <li>
                    <a href="#">TECHNOLOGY</a>
                </li>
                <li>
                    <a href="#">PUBLIC RELACTIONS</a>
                </li>
                <li>
                    <a href="#">ABOUT</a>
                </li>
            </nav>
        </>
    );
};

export default Wrap;
