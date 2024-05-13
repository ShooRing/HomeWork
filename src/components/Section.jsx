import About from "../components/About";
import Business from "../components/Business";
import Relations from "../components/Relations";
import Tachnologi from "../components/Tachnologi";
import "./Section.scss";

const Section = () => {
  return (
    <>
      <main id="container" className="main">
        <section id="content">
          <Business />
          <Tachnologi />
          <Relations />
          <About />
        </section>
      </main>
    </>
  );
};

export default Section;
