/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/

const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

// 1st function start fron here...
const getUniqueProductCount = listOfProducts.reduce((acc, curr) => {
    if (acc[curr.productName]) {
        acc[curr.productName] = ++acc[curr.productName]
    } else {
        acc[curr.productName] = 1
    }
    return acc;
},{})

console.log(getUniqueProductCount) //1st output in console


// 2nd function start from here...

const productObj = {};

const getUniquePrducts = [];

listOfProducts.forEach((el, idx) => {
  if (productObj[el.productName]) {
    el.quantity += productObj[el.productName].quantity;
    productObj[el.productName].quantity = el.quantity;
    getUniquePrducts[productObj[el.productName].index] = el;
  } else {
    productObj[el.productName] = { index: idx, quantity: el.quantity }
    getUniquePrducts.push(el)
   }
})
console.log(getUniquePrducts) // 2nd output in console
