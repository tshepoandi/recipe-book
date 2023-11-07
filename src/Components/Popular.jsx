import React, { useEffect, useState } from 'react'

function Popular() {
    const [popular,setPopular] = useState([])
    useEffect(()=>{
        getPopular()
    },[])
    const getPopular = async()=>{
      try {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15`)
        const data = await api.json();
        console.log(data)
        setPopular(data.recipes)
      } catch (error) {
        setPopular([{title:"problems reaching uhmmm....yeah"}])
      }
      
    } 
  return (
    <div>
      {popular.map((recipe,index)=>{
        return (
            <p key={index}>{recipe.title}</p>
        )
      })}
    </div>
  )
}

export default Popular
