import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
background: rgba(255, 255, 255, 0.54);
height: 4rem;
width: 100vw;
display: flex;
justify-content:center;
align-items: center
`


function TopNav() {
    return (
        <Nav>
            <h1 className="Header">Characters</h1>
        </Nav>
    )
}

export default TopNav
