import React from 'react'
const product = [
  {id: 1 , name: "Phone", price: 700},
  {id: 2 , name: "Laptop", price: 1200},
  {id: 3 , name: "Headphones", price: 200}
]
const ProductList = () => {
  return (
    <div>
    {product.map((list) => (
      <ul key={list.id}>
        <h1><li>Name: {list.name}</li></h1>
        <h1><li>Price: ${list.price}</li></h1>
      </ul>
    ))}
    </div>
  )
}

export default ProductList