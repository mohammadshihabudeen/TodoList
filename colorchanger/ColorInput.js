import React from 'react'

const ColorInput = ({handleColor}) => {
  return (
    <form action="" className='ColorInput' >
        <input type="text"placeholder='Add color name' onChange={(e)=>handleColor(e.target.value) }/>
    </form>
  )
}
export default ColorInput