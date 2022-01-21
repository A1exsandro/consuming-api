import React from "react";
import Characters from "./Pages/Characters";
import Comics from "./Pages/Comics";

import { 
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";

import GlobalStyle from './styles/global'

function App() {
  return (

    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </BrowserRouter>
    
  ); 
}

export default App;
