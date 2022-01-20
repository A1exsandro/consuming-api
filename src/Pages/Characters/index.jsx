import React, { useEffect } from 'react';
import api from '../../Service/api';

function Characters (){

  useEffect(()=>{
    api
      .get('/characters')
      .then(response => console.log(response.data.data))
      .catch(err => console.log(err));
  },[]);

  return <h1>Characters</h1>
}

export default Characters;