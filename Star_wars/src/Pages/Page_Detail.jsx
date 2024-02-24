import React, { useState, useEffect } from 'react';
import { useParams , useLocation } from 'react-router-dom';
import backgroundImage from '/card_page.jpg'; 
import logo from '/logo.png'; 

const PlanetDetails = () => {
  const location = useLocation();
  const planet = location.state;

  if (!planet) return <div>Loading...</div>;

  const [residentData, setResidentData] = useState([]);
  const [filmData, setFilmData] = useState([]);
  const [selectedResident, setSelectedResident] = useState(null);

  useEffect(() => {
    const fetchResidentData = async () => {
      const promises = planet.residents.map(async (residentUrl) => {
        const response = await fetch(residentUrl);
        const data = await response.json();
        return data;
      });
      const residentResults = await Promise.all(promises);
      setResidentData(residentResults);
    };

    const fetchFilmData = async () => {
      const promises = planet.films.map(async (filmUrl) => {
        const response = await fetch(filmUrl);
        const data = await response.json();
        return data;
      });
      const filmResults = await Promise.all(promises);
      setFilmData(filmResults);
    };

    fetchResidentData();
    fetchFilmData();
  }, [planet.residents, planet.films]);

  if (planet.created) {
    planet.created = new Date(planet.created).toLocaleString();
    
  }
  if (planet.edited) {
    planet.edited = new Date(planet.edited).toLocaleString();
  }

  const handleResidentClick = (resident) => {
    setSelectedResident(resident);
  };

  const handleCloseDetails = () => {
    setSelectedResident(null);
  };

//
  const { url, residents, films, ...planetDetails } = planet;

  return (
    <div className="container mx-auto py-8 text-white relative" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <img src={logo} alt="Logo" className="absolute top-10 left-10 w-20 h-16" style={{ zIndex: 10 }} />
      <div className="flex">
        <div className="w-3/4 p-8 backdrop-blur-0 rounded-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <h1 className="text-5xl font-bold text-center mb-8 text-yellow-400">{planet.name}</h1>
          <div className='mt-24 ml-16'>
            {Object.entries(planetDetails).map(([key, value], index) => (
              <div key={index} className="mb-10 px-10">
                <p className="text-lg font-semibold mb-2 text-yellow-400">{key.toUpperCase()}: <span className="text-white">{Array.isArray(value) ? value.join(", ") : value}</span></p>
              </div>
            ))}
            <div className="mb-10 px-10">
              <p className="text-lg font-semibold mb-2 text-yellow-400">RESIDENTS:</p>
              <ul className="text-white ml-4">
                {residentData.map((resident, index) => (
                  <li key={index} className="cursor-pointer" onClick={() => handleResidentClick(resident)}>
                    {resident.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-10 px-10">
              <p className="text-lg font-semibold mb-2 text-yellow-400">FILMS: <span className="text-white">{filmData.map((film, index) => <span key={index}>{film.title}{index !== filmData.length - 1 ? ', ' : ''}</span>)}</span></p>
            </div>
          </div>
        </div>
        <div className="w-1/4"></div>
      </div>

      {selectedResident && (
        <div className="static top-0 left-0 w-full h-full  flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full" onClick={handleCloseDetails}></div>
          <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">{selectedResident.name}</h2>
            <p><span className="font-semibold text-yellow-400">Height:</span> {selectedResident.height}</p>
            <p><span className="font-semibold text-yellow-400">Mass:</span> {selectedResident.mass}</p>
            <p><span className="font-semibold text-yellow-400">Hair Color:</span> {selectedResident.hair_color}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlanetDetails;
