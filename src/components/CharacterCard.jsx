import React from 'react';
import { FaHeart } from 'react-icons/fa';

// Functional Component for displaying a Character Card
const CharacterCard = ({ character, handleFavoriteToggle, favorites }) => {
  // Check if the character is in favorites list
  const isFavorite = favorites.includes(character.name);

  return (
    <div className="card-area">
      {/* Display the character image */}
      <img src={character.image} className="card-img-top" alt={character.name} />
      <div className="card-body">
        {/* Display character details */}
        <p className="card-title">{character.name}</p>
        <p className="card-text">Height: {character.height} cm</p>
        <p className="card-text">Gender: {character.gender}</p>
        <p className="card-text">Birth Year: {character.birth_year}</p>
      </div>
      <div className="favorite-panel">
        {/* Toggle favorite status */}
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
