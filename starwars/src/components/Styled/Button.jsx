import React from 'react'
import styled from 'styled-components'

const Pagination = styled.button`
  padding: .5rem;
  margin: .4rem;
  border-radius: .5rem;
  border: none;
  width: 5rem;
  outline: none;
  cursor: pointer;
  background-color: ${ props => props.bg};
  color: ${props => props.color};
`

export function Button({name, action, bg, color}) {

    return (
        <>
          <Pagination bg={bg} color={color} onClick={action}>{name}</Pagination> 
        </>
    )
}

export const AllGenderButton = styled.button`
  background: white;
  color: #55739f;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: ${props => props.female ? "none" : "none"};
  border-radius: 3px;
  &:hover {
    background: #4ce7e9;
    color: white;
}
`

export const GenderButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.female? "palevioletred" : "#59c4f4"};
  color: ${props => props.female? "white" : "white"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 3px;
  &:hover {
    background: ${props => props.female ? "#c42c91" : "#2480fe"};
  }
  `