import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

function HandleSearch() {

    const [HandleSearch,setHandleSearch] = useState([]);
    let params = useParams()

    const getHandleSearch = async (name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=50&query=${name}`)
        const recipes = await data.json()
        setHandleSearch(recipes.results)
        console.log(recipes.results)

    };
    useEffect(()=>{
        getHandleSearch(params.type)
    },[params.type])
    // console.log(params)
    return (
    <FoodGrid>
        {HandleSearch.map((item)=>{
            return (
                
                <Card key={item.id}>
                    <Image src={item.image}/>
                    <Hfour>{item.title}</Hfour>
                </Card>
            )
        })}
    </FoodGrid>
  )
}

const Card = styled.div`
   
    
`
const FoodGrid = styled.div`

display: grid;
grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);  /* 2 images in each row on smaller screens */
    }
    
`

const Image = styled.img`
    width:100%;
    border-radius:2rem;
`
const Anchor = styled.a`
    text-decoration:none;
    `
const Hfour = styled.h4`
    font-size:2rem;
    font-weight:700;
    text-align:center;
    padding: 1rem;`
export default HandleSearch

