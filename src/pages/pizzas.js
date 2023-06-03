import { graphql } from 'gatsby'
import React from 'react'
import PizzaList from '../components/PizzaList';

const Pizzas = ({data}) => {
  const Pizzas = data.Pizza.nodes;
  return (
    <div>
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
      topping {
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