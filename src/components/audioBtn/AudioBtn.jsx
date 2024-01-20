import { useState } from "react";
import "./audioBtn.scss";

const AudioBtn = () => {
  const [on, setOnState] = useState(true);

  const toggle = () => setOnState((o) => !o);

  return (
    <button onClick={toggle} className={on ? "audio-btn on" : "audio-btn off"}>
      turn {on ? "on" : "off"} audio
      <div className="equalizer__wrapper">
        <span className={`bar bar-1 ${on ? "" : "anim-off"}`}></span>
        <span className={`bar bar-2 ${on ? "" : "anim-off"}`}></span>
        <span className={`bar bar-3 ${on ? "" : "anim-off"}`}></span>
      </div>
    </button>
  );
};

export default AudioBtn;
