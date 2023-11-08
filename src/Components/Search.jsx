import React, { useState } from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import {BiHomeAlt2} from 'react-icons/bi'

function Searched() {
  const [input,setInput] = useState("");
  const navigate = useNavigate()
  const submitHandler = (e)=>{
    console.log("lets see .....")
    e.preventDefault()
    navigate("/searched/" + input)
  }
  
  return (
    <FormStyle onSubmit={submitHandler}>
      <NeededDiv>
      <StyledSVG onClick={submitHandler}></StyledSVG>
      <Input onChange={(e)=>{ setInput(e.target.value)}} type='text' placeholder={"Ho jewa eng today?"}/>
      
      </NeededDiv>
      
    </FormStyle>
  )
}

const FormStyle = styled.form`
  width:100%;
`


const NeededDiv = styled.div`
  width: 100%;
  position:relative
`

const Input = styled.input`
margin-left:3rem;
padding:1rem;
border:none;
background: linear-gradient(35deg,#494949,#313131);
border-radius:2rem;
outline:none;
color:white;
width:100%;
`
const StyledHome = styled(BiHomeAlt2)`
position: absolute;
top :50%;
left:0;
transform: translate(100%,-50%);
color:black;
cursor:pointer;
`
const StyledSVG = styled(FaSearch)`
position: absolute;
top :50%;
left:0;
transform: translate(100%,-50%);
color:black;
cursor:pointer;

`

export default Searched
