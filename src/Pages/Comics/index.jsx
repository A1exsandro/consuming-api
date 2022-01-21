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

function Comics (){

  const [comics, setComics] = useState([]);

  useEffect(()=>{
    api
      .get('/comics')
      .then(response => {
        console.log(response.data.data.results);
        setComics(response.data.data.results);
        console.log('segundo comics',comics)
      })
      .catch(err => console.log(err));
  },[]);

  const handleMore = useCallback(async() => {
    try {
      const offset = comics.length;
      const response = await api.get('/comics', {
        params: {
          offset,
        },
      });

      setComics([...comics, ...response.data.data.results]);

    } catch (err) {
      console.log(err)
    }
  }, [comics])

  return (
    <Container>
      <Header>
        <Main>
          <img src={Marvel} alt="Marvel" />
          <input></input>
          <Title>Alexsandro</Title> 
        </Main>
        <Menu>
        <Link className='link' to="/">CHARACTERS</Link>
          <Link className='link' to="/comics">COMICS</Link>
          <Link className='link' to="#">MORE</Link>
        </Menu>
      </Header>
       <Title>COMICS</Title>
      <CardList>
        {comics.map(comic => {
          return (
            <Card key={comic.id} >
              <div id="img">
                <img id='img' src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} 
                  alt={`Foto do ${comic.name}`}
                />
              </div>
              <h2>{comic.name}</h2>
              <p>{comic.description}</p>
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

export default Comics;