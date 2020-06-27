import React from 'react'
import styled from 'styled-components'
import './card.css'


const CardContainer = styled.div`
display: flex;
flex-direction: column;
background-color: rgba(255,255,255, .6);
padding: .5rem;
border-radius: 10px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
transition: all .6s ease-in-out;
&:hover {
    cursor: pointer;
    transform: scale(1.1);
}
`

const Image = styled.img`
border-radius: 10px;
`
const Name = styled.h1`
padding: 1rem 0 .5rem 0;
`

const Status = styled.div`

`
const StatusIcon = styled.span`
color: green;
font-size: 3rem;
padding-right: .5rem;
`


const Location = styled.p`

`

function Card({data}) {

    const {image, location, name, status, species} = data
    return (
       
       <CardContainer>
           <Image src={image} />
           <Name>{name}</Name>
            <Status><StatusIcon>•</StatusIcon>{status} <span>{species}</span></Status>
           <Location>Location: {location.name}</Location>
       </CardContainer>
      
    )
}

export default Card
