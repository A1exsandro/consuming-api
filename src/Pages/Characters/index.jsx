import React, { useCallback, useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import api from '../../Service/api';

import { Container, CardList, Card, ButtonMore } from './styles';

function Characters (){

  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    api
      .get('/characters')
      .then(response => {
        console.log(response.data.data.results);
        setCharacters(response.data.data.results);
        console.log('segundo log',characters)
      })
      .catch(err => console.log(err));
  },[]);

  const handleMore = useCallback(async() => {
    try {
      const offset = characters.length;
      const response = await api.get('/characters', {
        params: {
          offset,
        },
      });

      setCharacters([...characters, ...response.data.data.results]);

    } catch (err) {
      console.log(err)
    }
  }, [characters])

  return (
    <Container>
      <CardList>
        {characters.map(character => {
          return (
            <Card key={character.id} >
              <div id="img">
                <img id='img' src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                  alt={`Foto do ${character.name}`}
                />
              </div>
              <h2>{character.name}</h2>
              <p>{character.description}</p>
            </Card>
          );
        })}
      </CardList>
      <ButtonMore onClick={handleMore} >
        <FiChevronDown size={20} />
          Mais
        <FiChevronDown size={20} />
      </ButtonMore>
    </Container>
  );
}

export default Characters;