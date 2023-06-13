const { graphql } = require("gatsby");
const path = require("path");

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
    }
  `);
  //3. Loop over each pizza and create a page for that pizza
  data.Pizzas.nodes.forEach((pizza) => {
    // console.log(`pizaa/${pizza.slug.current}`);
    actions.createPage({
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current,
      },
    });
  });
}

//== Turn Slicemasters into pages ==//
async function turnSliceMastersIntoPages({ graphql, actions }) {
  //1. Query all Slicemasters
  const { data } = await graphql(`
    query MyQuery {
      allSanityPerson {
        totalCount
        nodes {
          slug {
            current
          }
          id
          name
        }
      }
    }
  `);
  console.log(process.env.GATSBY_PAGE_SIZE);
  //2. Figure out how many pages are there
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const totalSlicers = data.allSanityPerson.totalCount;
  const totalPaths = Math.ceil(totalSlicers / pageSize);
  //3. Loop over total paths and create that many pages

  Array.from({length: totalPaths}).forEach((_,index) => {
    actions.createPage({
      path: `slicemaster/${index + 1}`,
      component: path.resolve('./src/pages/slicemasters.js'),
      context: {
        skip: index * pageSize,
        currentPage: index + 1,
        pageSize,
      },
    })
  })
}

async function fetchBeersAndTurnIntoNodes({
  actions,
  createContentDigest,
  createNodeId,
}) {
  console.log("Turn beers into Nodes");
  //1. fetch a list of beers
  const response = await fetch("https://api.punkapi.com/v2/beers");
  const beers = await response.json();
  // console.log(responseJSON);
  //2. Loop over each one
  for (const beer of beers) {
    const nodeMeta = {
      id: createNodeId(`beer-${beer.name}`),
      parent: null,
      children: [],
      internal: {
        type: "Beer",
        mediaType: "application/json",
        contentDigest: createContentDigest(beer),
      },
    };
    //3. Create a node for the beers
    actions.createNode({ ...beer, ...nodeMeta });
  }
}

exports.sourceNodes = async (params) => {
  // Your code for sourcing nodes
  await Promise.all([fetchBeersAndTurnIntoNodes(params)]);
};
async function turnToppingsIntoPage({ graphql, actions }) {
  //--Get template--//
  const toppingsTemplate = path.resolve("./src/pages/pizzas.js");

  //--Query All Toppings--//
  const { data } = await graphql(`
    query MyQuery {
      Toppings: allSanityTopping {
        nodes {
          name
          id
        }
      }
    }
  `);

  data.Toppings.nodes.forEach((topping) => {
    actions.createPage({
      path: `topping/${topping.name}`,
      component: toppingsTemplate,
      context: {
        topping: topping.name,
      },
    });
  });
}

exports.createPages = async (params) => {
  // Create Pages Dynamically
  //1.Pizzas
  await Promise.all([
    turnPizzasIntoPages(params),
    turnToppingsIntoPage(params),
    turnSliceMastersIntoPages(params),
  ]);
  //2.Toppings
  // 3.SliceMasters
};
