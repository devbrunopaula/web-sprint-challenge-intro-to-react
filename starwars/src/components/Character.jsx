import React from 'react'
import Card from './Card/Card'
import styled from 'styled-components'



const CardWrapper = styled.div`
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-auto-rows: minmax(100px, auto);
    grid-row-gap: 4em;
    grid-column-gap: 2rem;
    width:100%;
   
`

function Character({data}) {

    

    return  (
        <CardWrapper>
         {data.map( e =>  <Card data={e} key={e.id}/>)}
        </CardWrapper>
    )
        
}

export default Character
