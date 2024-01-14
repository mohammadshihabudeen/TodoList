import React from 'react'
import { FaPlus } from 'react-icons/fa'
const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem" >AddItem</label>
        <input 
        type="text" 
        placeholder='Add Item'
        id="addItem"
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)} 
        required
        />
        <button
        type='submit'
        >
        <FaPlus/>
        </button>
    </form>
  )
}
export default AddItem