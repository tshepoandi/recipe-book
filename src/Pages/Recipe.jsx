import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

function Recipe() {
  let params = useParams()
  const [details,setDetails] = useState({});
  const [activeTab,setActiveTab] = useState('instructions')
  const fetchDetail = async()=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json()
    setDetails(detailData);
  }
  useEffect(()=>{
    fetchDetail()
  },[params.name])
   
  return (
    <DetailWrapper>
      hi
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      {/* <Info>
        <Button className={activeTab === 'instructions' ? 'active' : "" } onClick={()=> setActiveTab("instructions")}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : "" } onClick={()=> setActiveTab("ingredients")}>Ingredients</Button>

      </Info> */}
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top:1rem;
  margin-bottom:5rem;
  display:flex;
  .active{
    background: black;
   color: white;
  }

  h2{
    margin-bottom:2rem;
  }
  li{
    font-size:1.2rem;
    line-height:2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
`

const Button = styled.button`
  padding:1rem 2rem;
  color:#313131;
  background:white;
  border: 2px solid black;
  font-weight: 600;
`

const Info = styled.div`
  display:flex;
  margin-left:10rem;
`

export default Recipe
