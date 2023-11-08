import {FaPizzaSlice,FaHamburger} from 'react-icons/fa'
import {GiNoodles,GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Category() {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <Hfour>Italian</Hfour>
        </SLink >
        <SLink  to={'/cuisine/American'}>
            <FaHamburger/>
            <Hfour>American</Hfour>
        </SLink >
        <SLink to={'/cuisine/Thai'} >
            <GiNoodles/>
            <Hfour>Thai</Hfour>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks/>
            <Hfour>Japanese</Hfour>
        </SLink>
           
    </List>
  )
}

const Hfour = styled.h4`
color:white;
font-size:0.8rem;`

const List = styled.div`
    display: flex;
    justify-content: center;
    margin:2rem 0rem;
    
`
const SLink = styled(NavLink)`
    color:white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right:2rem;
    text-decoration: none;
    background: linear-gradient(35deg,#494949,#313131);
    width:4rem;
    height:4rem;
    cursor:pointer;
    transform: scale(0.8);
    &.active{
        background:linear-gradient(to right,#f27121,#e94057)
    }

`


export default Category

