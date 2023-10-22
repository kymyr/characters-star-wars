import React from 'react';
import { FaHeart } from 'react-icons/fa';


const CharacterCard = ({ character, handleFavoriteToggle, favorites }) => {
  const isFavorite = favorites.includes(character.name);

  return (
    <div className="card-area">
      <img src={character.image} className="card-img-top" alt={character.name} />
      <div className="card-body">
        <p className="card-title">{character.name}</p>
        <p className="card-text">Height: {character.height} cm</p>
        <p className="card-text">Gender: {character.gender}</p>
        <p className="card-text">Birth Year: {character.birth_year}</p>
      </div>
      <div className="favorite-panel">
        <button
          className={`favorite-button ${isFavorite ? 'favorite' : ''}`}
          onClick={() => handleFavoriteToggle(character.name)}
        >
          <FaHeart />
        </button>
        <div className="separator"></div>
      </div>
    </div>
  );
}

export default CharacterCard;
