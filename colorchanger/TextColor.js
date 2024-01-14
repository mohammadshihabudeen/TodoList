import React from 'react'
const TextColor = ({handleText}) => {
  return (
    <form action="" onSubmit={e=>e.preventDefault()}>
        <button type='submit' className='TextColor' onClick={handleText}>Doggle Color</button>
    </form>
  )
}
export default TextColor