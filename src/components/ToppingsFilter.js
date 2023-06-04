import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const ToppingsFilter = () => {
  //get a list of all toppings
  const {pizzas, toppings} = useStaticQuery(graphql`
  query ToppingQuery {
    toppings: allSanityTopping {
      nodes {
        id
        name
        vegetarian
      }
    }
    pizzas: allSanityPizza {
      nodes {
        id
        name
        toppings {
          name
          id
        }
      }
    }
  }`)
  console.clear();
  console.log({pizzas, toppings});
  return (
    <div> 
      
    </div>
  )
}

export default ToppingsFilter