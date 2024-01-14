import React from 'react'
import LineItem from './LineItem'
const ItemsList = ({items,handlecheck,handledelete}) => {
  return (
    <ul>
    {items.map((item) => (
      //key used for state control
      <LineItem
      key={item.id}
      item={item}
      handlecheck={handlecheck}
      handledelete={handledelete}
        />
    ))}
  </ul>
  )
}
export default ItemsList