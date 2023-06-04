import React from 'react'
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const SinglePizza = ({ data }) => {
  
  const pageData = data.sanityPizza;
  const {name, price,toppings} = pageData;
  const PizzaGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 2rem;
  `

  return (
    <PizzaGrid>
    <GatsbyImage image={pageData.image.asset.gatsbyImageData} alt={'asas'}/>
    <div>
      <h2 className='mark'>{name}</h2>
      <ul>
        {
          toppings.map((topping) => <li key={topping.id}>{topping.name}</li>)
        }
      </ul>
    </div>

    </PizzaGrid>
  )
}

export default SinglePizza
export const pizzaDatas = graphql`
query ($slug: String!) {
  sanityPizza(slug: {current: {eq: $slug}}) {
    name
    id 
    price
    image {
      asset {
            gatsbyImageData(layout: CONSTRAINED, width: 900)
          }
        }
    toppings {
      name
    }
  }
}

`
