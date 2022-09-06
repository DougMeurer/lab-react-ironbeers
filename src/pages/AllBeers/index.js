import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";

function AllBeers() {
  const [beers, setBeers] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBeers() {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        console.log(response.data);
        setBeers(response.data);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBeers();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <label>All Beers</label>

        {isLoading && (
          <>
            {beers.map((beer) => {
              return (
                <>
                  <div
                    className="beerContainer"
                    key={beer._id}
                    onClick={() => navigate(`/beers/${beer._id}`)}
                  >
                    <div className="beerContainerImage">
                      <img src={beer.image_url} alt="beer" />
                    </div>
                    <div className="align-left beerContainerText">
                      <h3>{beer.name}</h3>
                      <p className="text-gray">{beer.tagline}</p>
                      <p>
                        <small>
                          <strong>Created By:</strong> {beer.contributed_by}
                        </small>
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

export default AllBeers;
