import { useEffect, useState } from "react";

const Tour = ({ trip, removeTour }) => {
  const { id, image, info, name, price } = trip;
  const showLess = info.substring(0, info.length / 2) + "....";
  const [readMoreToggle, setReadMoreToggle] = useState(false);

  const showMore = () => {
    console.log(readMoreToggle);
    setReadMoreToggle(!readMoreToggle);
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMoreToggle ? info : showLess}
          <span onClick={showMore} className="info-btn">
            {readMoreToggle ? "Show less" : "Read more"}
          </span>
        </p>
        <button
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          not intrested
        </button>
      </div>
    </article>
  );
};
export default Tour;
