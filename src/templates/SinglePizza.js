import React from 'react'
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const SinglePizza = ({ data }) => {
  const pageData = data.sanityPizza;
  const {name, price} = pageData;
  return (
    <div>
      <h2>{name}</h2>
      <GatsbyImage image={pageData.image.asset.gatsbyImageData} alt={'asas'}/>

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
