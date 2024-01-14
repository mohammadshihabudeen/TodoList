import React from 'react';
import ItemsList from './ItemsList';
function Content({items,handlecheck,handledelete}) {
  return (
    <div className='content'>
      {(items.length) ? (
        <ItemsList
        items={items}
        handlecheck={handlecheck}
        handledelete={handledelete}
        />
      ) :
        (
          <p style={{color:"red"}}>Your list is empty</p>
        )}
    </div>
  )
}
export default Content;
