import { graphql } from 'gatsby'
import React from 'react'
import PizzaList from '../components/PizzaList';
import ToppingsFilter from '../components/ToppingsFilter';

const Pizzas = ({data, pageContext}) => {
  const Pizzas = data.Pizza.nodes;
  const topping = pageContext.topping;
  
  return (
    <div>
      <ToppingsFilter activeTopping={topping} />
      <PizzaList pizzas={Pizzas} />
    </div>
  );
}

export default Pizzas
export const query = graphql`
query MyQuery($topping: [String]) {
  Pizza: allSanityPizza(filter: {toppings: {elemMatch: {name: {in: $topping  }}}})  {
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