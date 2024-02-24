import React from 'react';
import { useNavigate } from 'react-router-dom';

const PlanetCard = ({ planet }) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>{
      navigate("/planetDetail",{state:planet})
    }} className="bg-gray-800 p-6 m-6 rounded-lg shadow-xl transform transition duration-300 hover:shadow-lg hover:bg-yellow-400 text-white hover:text-black hover:scale-105">
      <h2 className="text-xl font-bold text-center mb-4 ">{planet.name}</h2>
      <div className="flex justify-between mb-4">
        <p className="text-sm ">Climate: {planet.climate}</p>
        <p className="text-sm ">Population: {planet.population}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm ">Terrain: {planet.terrain}</p>
        <p className="text-sm ">Gravity: {planet.gravity}</p>
      </div>
    </div>
  );
}

export default PlanetCard;
