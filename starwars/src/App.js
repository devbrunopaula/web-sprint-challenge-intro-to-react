import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import axios from 'axios'
import './App.css';
import TopNav from './components/Navigation/TopNav';
import Character from './components/Character';
import ApiData from './data.js'

const App = () => {
  const [ data, setData ] = useState([])




// https://rickandmortyapi.com/
const fetchrickandmorty = async () => {

 try {
    
    const fetchedData = await axios.get(`https://rickandmortyapi.com/api/character/`)
    const response =  fetchedData.data
    setData(response.results)
    ApiData(response.results)
    
    
  } catch (error) {
    console.log(error)
   
  }
}


//Styled Components
const theme = {
  primary: 'blue',
  data: data
}


//  UseEffect
useEffect(() => {
  fetchrickandmorty()
  
},[])



  return (
    <ThemeProvider theme={theme}>
      <TopNav/>
      <Container>
        <Character data={data}/>
      </Container>
   </ThemeProvider>
  );
}

export default App;


const Container = styled.div`
width: 90vw;
height: 100vh;
max-width: 1000px;
margin: 30px auto;

`