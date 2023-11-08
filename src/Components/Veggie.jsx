import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide,SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
function Veggie() {
    const [Veggie,setVeggie] = useState([])
    useEffect(()=>{
        getVeggie()
    },[])
    const getVeggie = async()=>{

      const check = localStorage.getItem("Veggie")
      if(check){
        setVeggie(JSON.parse(check))
      }else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15`)
        const data = await api.json();
        localStorage.setItem("Veggie",JSON.stringify(data.recipes))
        console.log(data)
        setVeggie(data.recipes) 
      } 
           
    } 
  return (
    <div>
      <h3>Veggie Picks</h3>
      <Wrapper>
        <Splide

           options={{
            perPage:2,
            arrows:false,
            pagination:false,
            drag:"free",
            gap:"5rem"
          }}
        >
          {Veggie.map((recipe,index)=>{
            return (
              <SplideSlide key={index}>
                <Card>
                  <Paragraph key={index}>{recipe.title}</Paragraph>
                  <Image src={recipe.image} alt={recipe.title} />
                  <Gradient/>
                </Card>    
              </SplideSlide>           
          )
        })}
        </Splide>
      </Wrapper>
    </div>
  )
}

export const Wrapper = styled.div`
  margin: 4rem 0rem;  
`

const Gradient = styled.div`
  z-index:3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))
`

export const Card = styled.div`
  min-height: 25rem;
  overflow: hidden;
  position:relative;
`
const Image = styled.img`
  position:absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; 
  border-radius:2rem;
`

const Paragraph = styled.p`
position:absolute;
z-index:10;
left:50%;
bottom:0%;
transform:translate(-50%, 0%);
color:white;
width:100%;
text-align:center;
font-weight:600;
font-size:1rem;
height:40%;
display:flex;
justify-content:center;
align-items:center;
`
export default Veggie
