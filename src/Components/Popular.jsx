import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import '@splidejs/splide/css';
function Popular() {
    const [popular,setPopular] = useState([])
    useEffect(()=>{
        getPopular()
    },[])
    const getPopular = async()=>{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15`)
      const data = await api.json();
      console.log(data)
      setPopular(data.recipes)      
    } 
  return (
    <div>
      <h3>Popular Picks</h3>
      <Wrapper>
      {popular.map((recipe,index)=>{
        return (
          <Card>
            <p key={index}>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} />
          </Card>            
        )
      })}
      </Wrapper>
    </div>
  )
}

export const Wrapper = styled.div`
  margin: 4rem 0rem;  
`

export const Card = styled.div`
  min-height: 25rem;
  img {
    border-radius:2rem;
  }
`

export default Popular
