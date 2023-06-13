import { graphql } from 'gatsby'
import React from 'react'

const Slicemasters = ({ data }) => {
  
  const slicersArray = data.allSanityPerson.edges;
  
  return (
    <div>
      
    </div>
  )
}

export default Slicemasters
export const query = graphql`
query MyQuery {
  allSanityPerson {
    edges {
      node {
        id
        name
        image {
          asset {
            gatsbyImage(height: 100)
          }
        }
      }
    }
  }
}
`