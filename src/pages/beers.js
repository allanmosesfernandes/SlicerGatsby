import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components';

const Beers = ({data}) => {
  const beers = data.allBeer.edges;
  const BeerGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  margin: 2rem 0;
  text-align: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  img {
    width: 200px;
    height: 300px;
    object-fit: contain;
  }
  `
  console.log(beers);
  return (
    <>
      <h2 className='center'>We have {beers.length} beers available. Dine in Only</h2>
      <BeerGridStyles>
        {
          beers.map((beer, index) => {
            const { name,image_url,description } = beer.node;
            return <div key={index}>
              <h2>{name}</h2>
              <img src={image_url} alt={name} />
              <p>
                {description}
              </p>
            </div>
          })
        }
      </BeerGridStyles>
    </>
  ) 
}

export default Beers
export const query = graphql`
query MyQuery {
  allBeer {
    edges {
      node {
        id
        name
        description
        brewers_tips
        food_pairing
        image_url
        
      }
    }
  }
}
`