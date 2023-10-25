import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
  // State variables for characters and favorites
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Function to handle favorite toggling
  const handleFavoriteToggle = (character) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(character)) {
        return prevFavorites.filter(fav => fav !== character);
      } else {
        return [...prevFavorites, character];
      }
    });
  };

  // Sorting characters based on favorites
  const sortedCharacters = characters.sort((a, b) =>
    favorites.includes(b.name) - favorites.includes(a.name)
  );

  // Fetching characters from the backend
  useEffect(() => {
    // Local deploy
    // axios.get('http://localhost:3001/api/characters')
    
    // Deployed with render.com
    axios.get('https://star-wars-backend-5dv2.onrender.com/api/characters')
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error); 
      });
  }, []);

  return (
    <div>
      <h1>Star Wars Characters</h1>

      {/* List of Characters */}
      <div className="row">
        {sortedCharacters.map(character => (
          <div className="card" key={character.name}>
            {/* Character Card Component */}
            <CharacterCard 
              character={character}
              handleFavoriteToggle={handleFavoriteToggle}
              favorites={favorites} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
