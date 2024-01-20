import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import "./eventInfo.scss";

const EventInfo = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const eventTitle = new SplitType("#event-title");

    let t4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".event-title h2",
        start: "-10% 80%",
        end: "+=150",
        scrub: true,
      },
    });

    t4.from(eventTitle.chars, {
      opacity: 0,
      y: -10,
      x: 20,
      stagger: { amount: 0.4 },
    });

    gsap.fromTo(
      ".event",
      {
        backgroundColor: "#e1e1e1",
      },
      {
        scrollTrigger: {
          trigger: ".event__info",
          scrub: true,
          start: "0% 50%",
          end: "50% 50%",
        },
        backgroundColor: "#86807d",
        color: "#fff",
      }
    );
  });

  return (
    <div className="event">
      <div className="event-title">
        <h2 id="event-title">Event Information</h2>
      </div>

      <div className="event__info">
        <div className="when-where">
          <h4>When:</h4> Saturday, August 24, 2024 <br />
          <h4>Where:</h4> Salisbury House & Gardens, 4025 Tonawanda Dr, Des
          Moines, IA 50312
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
