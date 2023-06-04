import { graphql } from 'gatsby'
import React from 'react'
import PizzaList from '../components/PizzaList';
import ToppingsFilter from '../components/ToppingsFilter';

const Pizzas = ({data}) => {
  const Pizzas = data.Pizza.nodes;
  return (
    <div>
      <ToppingsFilter />
      <PizzaList pizzas={Pizzas} />
    </div>
  )
}

export default Pizzas
export const query = graphql`
query MyQuery {
  Pizza: allSanityPizza {
    nodes {
      id
      name
      price
      slug {
        current
      }
      toppings {
        name
      }
      image {
      asset {
            gatsbyImageData(layout: CONSTRAINED, width: 400)
          }
        }
      }
    }
  }


`