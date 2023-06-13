import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'
import styled from 'styled-components';




const SlicerGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 2rem;
.gatsby-image-wrapper {
  width: 100%;
}
img {
  height: 300px;
  object-fit: cover;
  width: 100%;
}
`
const Slicemasters = ({ data }) => {
  
  const slicersArray = data.allSanityPerson.edges;
  
  return <SlicerGrid>
    {
      slicersArray.map((slicer,index) => {

        const { id,name, description } = slicer.node;
        const image = getImage(slicer.node.image.asset);

        return (
          <div key={id}>
            <h2>{name}</h2>
            <GatsbyImage image={image} alt={name} />
            <p>{description}</p>
          </div>
        );
      })
    }

  </SlicerGrid>;
}

export default Slicemasters
export const query = graphql`
  query MyQuery {
    allSanityPerson {
      edges {
        node {
          id
          name
          image {
            asset {
              gatsbyImage(layout: CONSTRAINED, width: 400)
            }
          }
          slug {
            current
          }
          description
        }
      }
    }
  }
`;