import React from 'react'
import DisplayColor from './DisplayColor'
import ColorInput from './ColorInput'
import TextColor from './TextColor'
import { useState } from 'react'
const ColorChanger = () => {
const [Color,setcolor]=useState("Empty Value")
const [tColor,setTColor]=useState("black")
const handleText=()=>{
 if (tColor=="black")
setTColor("white")
 else
setTColor("black")
}
const handleColor=(c)=>{
setcolor(c)
}
  return (
    <main>
    <DisplayColor tColor={tColor}
    bColor={Color}
    />
    <ColorInput 
    handleColor={handleColor}
    />
    <TextColor handleText={handleText} />
    </main>
  )
}

export default ColorChanger