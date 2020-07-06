import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import axios from 'axios'
import './App.css';
import TopNav from './components/Navigation/TopNav';
import Character from './components/Character';
import ApiData from './data.js'
import {Button} from './components/Styled/Button';
import Loader from './images/loader1.gif'


const App = () => {
  const [ data, setData ] = useState([])
  const [ page, setPage ] = useState(1)
  const [ pageCounter, setPageCounter] = useState('')
  const [filter, setFilter] = useState('')
  const [ loading, setLoading ] = useState(false)


  //Next Page
  const nextPage = () => {
    setPage( prev => prev + 1)
  }
  
  const prevPage = () => {
   setPage( prev => prev - 1)
  }

  function helper(data) {
    // const filterData = data.filter(element =>  element.status = "dead")
    // console.log('New Array', filterData)
    setData(data)
 }

// API CALL to https://rickandmortyapi.com/
const fetchrickandmorty = async () => {
 
 try {
    setLoading(true)
    const fetchedData = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&${filter}`)
    const response =  fetchedData.data
    // setting Data via Helper Function
    helper(response.results)
    setPageCounter(response.info.pages)
    setLoading(false)
 } catch (error) {
    setLoading(true)
    console.log(error)
   
  }
}

//Styled Components
const theme = {
  primary: 'blue',
  data: data
}


//  UseEffect Hook
useEffect(() => {
// Promise.all
    // ApiData()
  fetchrickandmorty()
  
  
},[page, filter])

  
  
const Btn = () => {
 return (
  <>
    <Button action={prevPage} name="Previous" bg="" color=""/> 
    {page >= 30 ? "" :<Button name="Next" action={nextPage} bg="#21316d" color="white"/>} 
   </>
 )
  
}
  
  

  return (
    <ThemeProvider theme={theme}>
      <TopNav setFilter={setFilter} />
      
        {loading ? <LoaderWrapper> <LoaderIcon src={Loader} /></LoaderWrapper> :  
        <Container>
            <Character data={data}/>
          <BtnWrapper>
            {page <= 1 ? <Button name="Next" bg="" color="" action={nextPage}/> : <Btn/>}
            <h4> {page} / {pageCounter} </h4>
          </BtnWrapper>
        </Container>
        }
   </ThemeProvider>
  );
}

export default App;


const Container = styled.section`
  width: 90vw;
  max-width: 1000px;
  margin: 30px auto;
`

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`

const LoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid yellow;
`

const LoaderIcon = styled.img`
 width:250px;
 height: 200px; 
 border-radius: 50%;
`