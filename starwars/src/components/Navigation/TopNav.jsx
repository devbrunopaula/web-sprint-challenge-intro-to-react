import React from 'react'
import styled from 'styled-components'
import { AllGenderButton, GenderButton } from '../Styled/Button'




function TopNav({setFilter}) {

    function filterStatus(filterQuery) {
        if (filterQuery === '') {
          setFilter('')
        } else {
          setFilter(filterQuery)
        }
    }
    

    return (
        <Nav>
            <h1 className="Header">Characters</h1>
            <BtnWrapper>
                <AllGenderButton onClick={() => filterStatus('')}>All</AllGenderButton>
                <GenderButton onClick={() => filterStatus('gender=male')}>MALE</GenderButton>
                <GenderButton female onClick={() => filterStatus('gender=female')}>Female</GenderButton>
            </BtnWrapper>

        </Nav>
    )
}

export default TopNav

const Nav = styled.nav`
    background: rgba(255, 255, 255, 0.54);
    height: 4rem;
    width: 100vw;
    display: flex;
    justify-content:space-around;
    align-items: center;
    @media (max-width: 375px) {
        height: 100px;
        flex-direction: column
    }
`


const BtnWrapper = styled.div`
    @media (max-width: 375px) {
    
    }
`