import React, { useCallback, useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import api from '../../Service/api';

import { Link } from 'react-router-dom';

import Marvel from '../../img/Marvel.png'

import { 
  Container, 
  CardList, 
  Card, 
  ButtonMore,
  Header,
  Main,
  Title, 
  Menu
} from './styles';

function Characters (){

  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    api
      .get('/characters')
      .then(response => {
        console.log(response.data.data.results);
        setCharacters(response.data.data.results);
        console.log('console characters',characters)
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

      <Header>
        <Main>
          <img src={Marvel} alt="Marvel"  />
          <input></input>
          <Title>Alexsandro</Title> 
        </Main>
        <Menu>
          <Link className='link' to="/">CHARACTERS</Link>
          <Link className='link' to="/comics">COMICS</Link>
          <Link className='link' to="#">MORE</Link>
        </Menu>
      </Header>

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
              <ButtonMore>COMICS</ButtonMore>
              <ButtonMore>DESCRIPTION</ButtonMore>
              {/* <p>{character.description}</p> */}
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