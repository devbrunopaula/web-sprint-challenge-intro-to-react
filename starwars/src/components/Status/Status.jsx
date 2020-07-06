import React from 'react'
import styled from 'styled-components'


function Status({data}) {
    return (
        <StatusContainer>
            <StatusIcon status={data.status}>•</StatusIcon>
            <MonsterStatus>{data.status} - <Spicies>{data.species}</Spicies></MonsterStatus>
        </StatusContainer>
    )
}

export default Status


//Styled Component
const StatusContainer = styled.div`
    display: flex;
    align-items: center;
`



const StatusIcon = styled.p`
    box-shadow: 0 0 0 0 rgba(51, 217, 178, 1);
    color: ${ props => props.status === 'Dead' ? 'red' : '#55cc44' };
    color: ${ props => props.status === 'unknown' ? 'gray' : ''};
    font-size: 3rem;
`
const MonsterStatus = styled.h4`
    padding-left: 1rem;
`

const Spicies = styled.span`
`