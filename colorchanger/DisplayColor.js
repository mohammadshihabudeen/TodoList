import React from 'react'

const DisplayColor = ({tColor,bColor}) => {
  return (
    <section className={tColor}  style={
        {backgroundColor:bColor}
    }
    >{!bColor?"Empty Value":bColor}</section>
  )
}
export default DisplayColor