import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="title-underline"></div>
        <div className="tours">
          {tours.map((trip, index) => {
            return <Tour key={trip.id} trip={trip} removeTour={removeTour} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Tours;
