import React from 'react'
import "./Board.css"
import Box from './Box'

function Board({board,onClick}) {
  return (
    <div className='board'>
        {board.map((ele,key)=>(
            <Box value={ele} key={key} onClick={()=>ele===null && onClick(key)}/>
        ))}
    </div>
  )
}

export default Board