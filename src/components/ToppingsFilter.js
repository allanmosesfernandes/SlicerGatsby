import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

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

  const ToppingStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem; 

  a {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    align-items: center;
    padding: 5px;
    background: var(--grey);
    border-radius: 10px;

    .count {
      background: white;
      padding: 2px 5px;
    }
    .active {
      background: var(--yellow);
    }
  }
  `
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
    <ToppingStyles> 
        {
          tooppingsWithCount.map((topping) => (
          <Link to={`/topping/${topping.name}`} key={topping.id}>
          <span className='name'>{topping.name}</span>
          <span className='count'>{topping.count}</span>
          </Link>))
        }
    </ToppingStyles>
  )
}

export default ToppingsFilter