import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  let backUp = 0;
  const removeTour = (id) => {
    const newTours = tours.filter((trip) => trip.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      backUp = data;
      console.log(data);
    } catch (e) {
      console.log("An error occurred: ", e);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  // tours.length === 0
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>Add More tours</h2>
          <div className="title-underline"></div>
          <div className="tour-info">
            <button
              className="btn btn-block delete-btn"
              onClick={() => {
                setIsLoading(true);
                fetchData();
                setIsLoading(false);
              }}
            >
              Add more tours
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
