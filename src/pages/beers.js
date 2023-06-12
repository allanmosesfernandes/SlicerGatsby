import React from 'react'
import { graphql } from 'gatsby'

const Beers = ({data}) => {
  const beers = data.allBeer.edges;
  console.log(beers);
  return (
    <div>Beers</div>
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