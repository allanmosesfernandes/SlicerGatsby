import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const ToppingsFilter = () => {

  const { toppings, pizza } = useStaticQuery(graphql`
query MyQuery {
  allSanityTopping {
    nodes {
      vegetarian
      name
      id
    }
  }
  allSanityPizza {
    nodes {
      name
      toppings {
        name
        id
      }
      id
    }
  }
}`)


  return (
    <div>
      
    </div>
  )
}

export default ToppingsFilter