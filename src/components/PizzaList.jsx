import { Link } from 'gatsby'
import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import PizzaFilter from './ToppingsFilter'

const PizzaGridStyles = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 4rem;
grid-auto-rows: auto auto 500px; 
`

const PizzaStyles = styled.div`
    display: grid;
    gap: 1rem;
    grid-row-span: 3;
    grid-template-rows: auto auto 1fr;

    h2,p {
        margin: 0;
    }
`
function SinglePizza({pizza}) {
    return <PizzaStyles>
        <Link to={`/pizza/ ${pizza.slug.current}`}>
            <h2><span className='mark'>{pizza.name}</span></h2>
        </Link>
            <p>
                {pizza.toppings.map((topping) => topping.name).join(', ')}
            </p>
            <GatsbyImage image={pizza.image.asset.gatsbyImageData} alt={pizza.name}/>
 
    </PizzaStyles>
}


const PizzaList = ({ pizzas }) => {
 
  return (
    <>
    <PizzaGridStyles>
        {
            pizzas.map((pizza) => <SinglePizza key={pizza.id} pizza={pizza}/>)
        }
    </PizzaGridStyles>

    </>

  )
}

export default PizzaList