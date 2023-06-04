import { graphql, Link, useStaticQuery } from 'gatsby'
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

  //count how many pizzas in toppings
  function countPizzasInToppings (pizzas) {
    const ToppingsArray = pizzas.map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      //check if it is an existing topping
      const existingTopping = acc[topping.id];

      //if there is an existing topping, then increment by one
      if(existingTopping) {
        existingTopping.count += 1;
      }else {
        acc[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        }
      }
      return acc
      //otherwise 
    }, {});

    //sort pizzas
    const sortedPizzas = Object.values(ToppingsArray).sort((a,b) => b.count - a.count);
    return sortedPizzas;
  }
  // console.log({pizzas, toppings});
  const tooppingsWithCount = countPizzasInToppings(pizzas.nodes);
  return (
    <div> 
        {
          tooppingsWithCount.map((topping) => (<Link>{topping.name}</Link>))
        }
    </div>
  )
}

export default ToppingsFilter