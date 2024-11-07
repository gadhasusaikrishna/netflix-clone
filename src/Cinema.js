import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cinema = () => {
  const [cinemas, setCinemas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cinemas')
      .then(response => setCinemas(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="cinema-container">
      {cinemas.map(cinema => (
        <div key={cinema.id} className="cinema">
          <img src={cinema.poster} alt={cinema.name} />
          <h3>{cinema.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Cinema;

