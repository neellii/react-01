import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./schedule.scss";

const Schedule = () => {
  useGSAP(() => {
    let t5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".schedule",
      },
    });

    t5.from(".schedule__title", { opacity: 0 });

    gsap.utils.toArray(".schedule ul li").forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },

        autoAlpha: 0,
        y: 25,
        duration: 0.75,
      });
    });
  });

  return (
    <div className="schedule">
      <h2 className="schedule__title">Schedule</h2>
      <ul>
        <li>
          Welcome Drinks <span>3:00 pm</span>
        </li>
        <li>
          Ceremony <span>5:30 pm</span>
        </li>
        <li>
          Reception <span>7:00 pm - 11:00 pm</span>
        </li>
      </ul>
    </div>
  );
};

export default Schedule;
