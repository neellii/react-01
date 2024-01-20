import { useRef } from "react";
import { Link } from "react-router-dom";
import SplitType from "split-type";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import transition from "../../assets/transition.jsx";
import AudioBtn from "../../components/audioBtn/AudioBtn.jsx";
import "./intro.scss";

const Intro = () => {
  const comp = useRef(null);

  useGSAP(() => {
    const brideName = new SplitType("#bride");
    const groomName = new SplitType("#groom");

    let t1 = gsap.timeline({
      defaults: {
        duration: 2,
        delay: 0.8,
        opacity: 0,
      },
    });
    t1.from(brideName.chars, {
      stagger: { amount: 0.5 },
      delay: 1.2,
      x: 4,
      y: 10,
    })
      .from("#and", { x: 4 }, "<")
      .from(groomName.chars, { stagger: { amount: 0.5 }, x: 4, y: 10 }, "<")
      .from(".intro p", {}, "<")
      .from(".intro__link", { duration: 3 }, "<")
      .from(".audio-btn", {}, "<");
  });

  return (
    <div className="intro" ref={comp}>
      <div className="intro__names">
        <h1 id="bride">Marceline</h1>
        <h2 id="and">&</h2>
        <h1 id="groom">Richard</h1>
      </div>

      <p>invite you to celebrate our marriage!</p>

      <Link to="/opened" className="intro__link">
        open invitation
      </Link>

      <AudioBtn />
    </div>
  );
};

export default transition(Intro);
