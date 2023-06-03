import { Link } from 'gatsby'
import React from 'react'

function SinglePizza({pizza}) {
    return <div>
        <Link to={`/${pizza.slug.current}`}>
            <p>{pizza.name}</p>
        </Link>
    </div>
}


const PizzaList = ({ pizzas }) => {
 
  return (
    <div>
        {
            pizzas.map((pizza) => <SinglePizza key={pizza.id} pizza={pizza}/>)
        }
    </div>
  )
}

export default PizzaList