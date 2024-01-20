import { useState, useRef } from "react";
import "./guestInfo.scss";

const GuestInfo = ({ sections }) => {
  const [selected, setSelected] = useState(null);
  const contentRef = useRef(null);

  const toggleAccordion = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="guest">
      <h2>Guest Information</h2>

      <div className="accordion-wrapper">
        {sections.map((item, i) => (
          <div className="accordion" key={i}>
            <div
              className="accordion__title"
              onClick={() => toggleAccordion(i)}
            >
              <p>{item.title}</p>
              <span className="selected-span">
                <div></div>
                {selected === i ? (
                  <div style={{ height: 0 }}></div>
                ) : (
                  <div style={{ height: "100%" }}></div>
                )}
              </span>
            </div>
            <div
              className={`accordion__content ${selected === i ? "show" : ""}`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>

      <div className="guest__info-wrapper">
        <p className="guest__info">
          Thank you so much for always being there for us. Your presence is the
          greatest gift, but we are also saving for our first home so any
          contributions are hugely appreciated.
        </p>
      </div>

      <div className="guest__contacts" id="Contacts">
        For any inquiries please contact our wedding agent Kamilla
        <a href="tel:">+1 (515) 123 4567</a>
        <a href="mailto:">@kamilla.wedding.agent@mail.com</a>
      </div>
    </div>
  );
};

export default GuestInfo;
