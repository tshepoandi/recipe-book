import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

function Recipe() {
  let params = useParams()
  const [details,setDetails] = useState({});
  const [activeTab,setActiveTab] = useState('instructions')
  const fetchDetail = async()=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=04c9857f5687435bbf1ce2cfb2cf8954`)
    const detailData = await data.json()
    setDetails(detailData);
    console.log(detailData)
  }
  useEffect(()=>{
    fetchDetail()
  },[params.name])
   
  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : "" } onClick={()=> setActiveTab("instructions")}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : "" } onClick={()=> setActiveTab("ingredients")}>Ingredients</Button>
        {activeTab === 'instructions' && (
          <div>
          <p dangerouslySetInnerHTML={{ __html: details.summary}} >
          </p>
        </div>
        )};
        {activeTab === 'ingredients' && (
          <ul>
            {
              details.extendedIngredients.map((i)=>(
                <li>{i.original}</li>
              ))
            }
          </ul>
        )}
        
      </Info>
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
  height:50px;
  font-weight: 600;
`

const Info = styled.div`
  display:flex;
  margin-left:10rem;
  flex-direction:column;
  p{
    font-size:10px;
  }
`

export default Recipe
