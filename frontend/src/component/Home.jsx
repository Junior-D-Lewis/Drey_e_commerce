import React from 'react'
import CardItem from './CardItem'
import { useCart } from '../contexts/cartContext'

export default function Home() {
  const { products } = useCart()
  return (
    <div className='flex gap-4 p-10'>
      {products.map((product) => (
        <CardItem
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.imageUrl}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  )
}
