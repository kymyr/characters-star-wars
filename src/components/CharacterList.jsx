import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteToggle = (character) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(character)) {
        return prevFavorites.filter(fav => fav !== character);
      } else {
        return [...prevFavorites, character];
      }
    });
  };

  
  const sortedCharacters = characters.sort((a, b) =>
    favorites.includes(b.name) - favorites.includes(a.name)
  );

  useEffect(() => {
    axios.get('http://localhost:3001/api/characters')
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
      <div className="row">
        {sortedCharacters.map(character => (
          <div className="card" key={character.name}>
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
