import { FaStar } from "react-icons/fa";

const StarRating = ({ getRate }) => {
  return (
    <div className="rating">
      <input
        onChange={(e) => getRate(e.target.value)}
        type="radio"
        id="star5"
        name="rating"
        value="5"
      />
      <label
        className="star"
        htmlFor="star5"
        title="Awesome"
        aria-hidden="true"
      >
        <FaStar />
      </label>
      <input
        onChange={(e) => getRate(e.target.value)}
        type="radio"
        id="star4"
        name="rating"
        value="4"
      />
      <label className="star" htmlFor="star4" title="Great" aria-hidden="true">
        <FaStar />
      </label>
      <input
        onChange={(e) => getRate(e.target.value)}
        type="radio"
        id="star3"
        name="rating"
        value="3"
      />
      <label
        className="star"
        htmlFor="star3"
        title="Very good"
        aria-hidden="true"
      >
        <FaStar />
      </label>
      <input
        onChange={(e) => getRate(e.target.value)}
        type="radio"
        id="star2"
        name="rating"
        value="2"
      />
      <label className="star" htmlFor="star2" title="Good" aria-hidden="true">
        <FaStar />
      </label>
      <input
        onChange={(e) => getRate(e.target.value)}
        type="radio"
        id="star1"
        name="rating"
        value="1"
      />
      <label className="star" htmlFor="star1" title="Bad" aria-hidden="true">
        <FaStar />
      </label>
    </div>
  );
};

export default StarRating;
