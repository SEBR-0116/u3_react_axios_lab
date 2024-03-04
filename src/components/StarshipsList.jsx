import axios from 'axios';
import { useState, useEffect } from 'react';
import StarshipListElement from "./StarshipListElement";

function StarshipsList() {
  const [starships, setStarships] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const getStarships = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/starships');
        setStarships(response.data.results); // Assuming the API response has a 'results' field
      } catch (error) {
        console.error("Error fetching starships:", error);
      } finally {
        setIsLoading(false); // Ensure loading state is updated regardless of request outcome
      }
    };

    getStarships();
  }, []);

  // Conditional rendering based on loading state and data availability
  return (
    <div>
        
      {isLoading ? (
        <p>Loading starships...</p> // Display while data is loading
      ) : starships && starships.length > 0 ? (
        <StarshipListElement starships={starships} /> // Render component when data is loaded
      ) : (
        <p>No starships found.</p> // Display in case of no data or error
      )}     
    </div>
  );
}

export default StarshipsList;
