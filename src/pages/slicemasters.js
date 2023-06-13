import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'
import styled from 'styled-components';




const SlicerGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 2rem;
h2 {
  text-align: center;
  transform: rotate(2deg);
  position: relative;
  z-index: 2;
  margin-bottom: -2rem; 
}

.description {
  background: var(--yellow);
  padding: 1rem;
  margin: 2rem;
  margin-top: -6rem;
  transform: rotate(2deg);
}   
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
            <h2><span className='mark'>{name}</span></h2>
            <GatsbyImage image={image} alt={name} />
            <p className='description'>{description}</p>
          </div>
        );
      })
    }

  </SlicerGrid>;
}

export default Slicemasters
export const query = graphql`
  query MyQuery {
    allSanityPerson(limit: 4, skip: 4)  {
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