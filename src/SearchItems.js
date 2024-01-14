import React from 'react'

const SearchItems = ({search,setSearch}) => {
  return (
    <form className='searchForm' onSubmit={e=>e.preventDefault()}>
    <label htmlFor="Search" >Search Item</label>
    <input 
    type="text" 
    value={search}
    role='searchbox'
    placeholder='Search Items'
    id="search"
    onChange={e=>setSearch(e.target.value)}
    />
</form>
  )
}

export default SearchItems