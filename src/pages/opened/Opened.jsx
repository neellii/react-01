import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import transition from "../../assets/transition.jsx";
import "./opened.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Couple from "../../components/couple/Couple.jsx";
import Story from "../../components/story/Story.jsx";
import EventInfo from "../../components/eventInfo/EventInfo.jsx";
import Schedule from "../../components/schedule/Schedule.jsx";
import Rsvp from "../../components/rsvp/Rsvp.jsx";
import GuestInfo from "../../components/guestInfo/GuestInfo.jsx";

import data from "../../assets/accordionData.js";

const Opened = () => {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <ReactLenis root className="opened-page" ref={lenisRef} autoRaf={false}>
      <Sidebar />
      <section className="opened-page__couple" id="Main">
        <Couple />
      </section>
      <section id="Our%20Story">
        <Story />
      </section>
      <section id="Event%20Info">
        <EventInfo />
      </section>
      <section>
        <Schedule />
      </section>
      <section id="RSVP">
        <Rsvp />
      </section>
      <section id="Guest%20Info">
        <GuestInfo sections={data} />
      </section>
      <section className="spacer"></section>
    </ReactLenis>
  );
};

export default transition(Opened);
