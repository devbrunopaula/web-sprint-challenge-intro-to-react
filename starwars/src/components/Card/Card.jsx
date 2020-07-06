import React from 'react'
import styled from 'styled-components'

import Status from '../Status/Status'



function Card({data}) {

    const { image, origin, name, gender } = data
    
    return (
       
       <CardContainer>
           <Image src={image} />
           <Name>{name}</Name>
           <Status data={data}/>
           <Origin>Origin: {origin.name}</Origin>
           <Gender>Gender: {gender}</Gender>
       </CardContainer>
      
    )
}

export default Card


const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    background-color: rgba(255,255,255, .7);
    padding: .5rem;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition-duration: 1s;
    &:hover {
        cursor: pointer;
        transform: scale(1.1) skew(.1deg);
        box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
        background-color: rgba(255,255,255, 9);
    }
`

const Image = styled.img`
    border-radius: 10px;
    height: 300px;
    width: 100%;
`
const Name = styled.h2`
    font-size: 1.4rem;
    padding: 1rem 0 .5rem 0;
`


const StatusIcon = styled.span`
    color: green;
    font-size: 3rem;
    padding-right: .5rem;
`


const Origin = styled.h5`

`
const Gender = styled.p`
    padding-top: 1rem;
`