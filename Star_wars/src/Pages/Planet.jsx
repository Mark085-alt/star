import React, { useState, useEffect } from 'react';
import PlanetCard from '../Components/PlanetCard';

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [planetsPerPage] = useState(10);

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/?page=${currentPage}&format=json`)
      .then(response => response.json())
      .then(data => setPlanets(data.results))
      .catch(error => console.log(error));
  }, [currentPage]);

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <div className="container mx-auto py-8 " style={{ backgroundImage: 'url(/homepage_background.jpg)', backgroundSize: 'cover' }}>
      <h1 className="text-4xl font-bold text-yellow-300 text-center  mb-4">PLANETS DIRECTORY</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-11/12 mx-auto gap-x-28">
        {planets.map(planet => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Prev
        </button>
        <button
          onClick={nextPage}

          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
