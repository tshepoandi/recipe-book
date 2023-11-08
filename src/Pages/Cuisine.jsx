import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

function Cuisine() {

    const [cuisine,setCuisine] = useState([]);
    let params = useParams()

    const getCuisine = async (name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=20&cuisine=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results)

    };
    // useEffect(()=>{
        // getCuisine()
    // },[])
    console.log(params)
    return (
    <div>
      
    </div>
  )
}

export default Cuisine
