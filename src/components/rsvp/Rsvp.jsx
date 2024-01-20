import "./rsvp.scss";

const Rsvp = () => {
  return (
    <div className="rsvp">
      <h2 className="rsvp__title">RSVP</h2>
      <p>Kindly respond by August 1, 2024</p>

      <form className="rsvp__form">
        <label htmlFor="name">
          <span>Your Full Name</span>
          <input className="form__name" id="name" type="text" />
        </label>

        <div className="form__option">
          <label htmlFor="will">
            <input name="radio" type="radio" id="will" defaultChecked />
            Will attend
          </label>

          <label htmlFor="unable">
            <input name="radio" type="radio" id="unable" /> Unable attend
          </label>
        </div>

        <label className="form__number" htmlFor="number">
          Number of guests attending
          <input type="number" />
        </label>

        <label className="form__note" htmlFor="note">
          Note
          <textarea name="note" id="note"></textarea>
        </label>

        <button className="form__btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Rsvp;
