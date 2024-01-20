import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./couple.scss";

import couple from "/img/couple.png";
import leaf from "/img/leaf.png";
import Timer from "../timer/Timer";

const Couple = () => {
  const comp = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(() => {
    let t2 = gsap.timeline({
      duration: 1,
      ease: "Power3.inOut",
    });

    t2.from(
      ".reveal",
      {
        yPercent: -110,
        duration: 2.5,
      },
      1.2
    );
    t2.from(
      ".couple__img",
      {
        yPercent: 100,
        scale: 1.15,
        duration: 2.5,
      },
      1.2
    )
      .from(
        ".couple__leaf1",
        { opacity: 0, delay: 0.5, duration: 4, scale: 0.9, rotate: "-20deg" },
        "<"
      )
      .from(".couple__p", { opacity: 0, duration: 2 }, "<")
      .from(
        ".couple__leaf2",
        { opacity: 0, delay: 0.5, duration: 3, scaleY: -0.9, rotate: "86deg" },
        "<"
      );
  });

  return (
    <div className="couple" ref={comp}>
      <div className="reveal">
        <img className="couple__img" src={couple} alt="couple" />
      </div>

      <img className="couple__leaf1" src={leaf} alt="leaf" />
      <img className="couple__leaf2" src={leaf} alt="leaf" />

      <div className="toggle">
        {scrollY > 400 ? (
          <Timer deadline="August, 8, 2024" />
        ) : (
          <p className="couple__p">
            Marceline and Richard joyfully invite you to celebrate their love
            and commitment as they exchange vows and unite in marriage
          </p>
        )}
      </div>
    </div>
  );
};

export default Couple;
