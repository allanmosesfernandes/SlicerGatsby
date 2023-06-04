import React from 'react'
import { graphql } from 'gatsby';

const SinglePizza = ({data}) => {
  const pageData = data.sanityPizza;
  const {name, price} = pageData;
  return (
    <div>
        <h2>{name}</h2>
    </div>
  )
}

export default SinglePizza
export const pizzaDatas = graphql`
query ($slug: String!) {
  sanityPizza(slug: {current: {eq: $slug}}) {
    name
    id 
    price
    toppings {
      name
    }
  }
}

`
