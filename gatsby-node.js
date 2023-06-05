const path = require("path")

async function turnPizzasIntoPages({ graphql, actions }) {
    // 1. Get a template for this page
    const pizzaTemplate = path.resolve("./src/templates/SinglePizza.js");

    //2. Query all pizzas 
     const { data } = await graphql(`
        query MyQuery {
        Pizzas: allSanityPizza {
        nodes {
        name
        slug {
            current
        }
        }
    }
    }`)
    
    //3. Loop over each pizza and create a page for that pizza
    data.Pizzas.nodes.forEach(pizza => {
        console.log(`pizaa/${pizza.slug.current}`);
        actions.createPage({
            path: `pizza/${pizza.slug.current}`,
            component: pizzaTemplate, 
            context: {
                slug: pizza.slug.current
            }
        })
    });
}

async function turnToppingsIntoPage ({ graphql, actions }) {
    //--Get template--//
    const pizzaTemplate = path.resolve("./src/templates/SinglePizza.js");

    //--Query All Toppings--//
    const { data } = await graphql`
      query MyQuery {
        Toppings: allSanityTopping {
          nodes {
            name
            vegetarian
            id
          }
        }
      }
    `;
    
    data.Toppings.node.forEach(topping => {
        actions.createPage({
            path: `topping/${topping.name}`,
            component: pizzaTemplate,
            context: {
            id: topping.id
            },
        });
    })
}

exports.createPages = async (params) => {

    // Create Pages Dynamically
    //1.Pizzas
    await turnPizzasIntoPages(params)
    //2.Toppings
    //3.SliceMasters

}