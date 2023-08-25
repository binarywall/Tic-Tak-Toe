import React,{useState} from 'react'
import Box from './Box'
import Board from './Board'
import { ScoreBoard } from './ScoreBoard';
import Reset from './Reset';

function Game() {

  const winConditions=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

  const [board,setBoard]=useState(Array(9).fill(null));
  const [xPlay,setxPlay]=useState(true);
  const [scores,setScores]=useState({xScore:0,oScore:0})
  const[gameOver,setGameOver]=useState(false)

  const handeleboxClick=(boxIdx)=>{
    const updatedBoard = board.map((ele,idx)=>{
        if(idx===boxIdx){
          return xPlay===true?"X":"O";
        }else{
          return ele;
        }
    })
    const winner=checkWinner(updatedBoard)
    if(winner){
      if(winner==="O"){
        let {oScore}=scores;
        oScore+=1;
        setScores({...scores,oScore})
      }else{
        let {xScore}=scores;
        xScore+=1;
        setScores({...scores,xScore})
      }
    }
    console.log(scores);

    setBoard(updatedBoard);
    setxPlay(!xPlay);
  }

  const checkWinner=(board)=>{
    for(let i=0;i<winConditions.length;i++){
      const[x,y,z]=winConditions[i];

      if(board[x] && board[x] === board[y] && board[y]===board[z]){
        console.log(board[x])
        setGameOver(true)
        return board[x]; 
      }
    }
  }

  const resetBoard=()=>{
    setGameOver(false);
    setBoard(Array(9).fill(null))
  }
  
  return (
    <div>
      <h1>Tik-Tak-Toe</h1>
      <ScoreBoard scores={scores} xPlay={xPlay}/>
      <Board board={board} onClick={gameOver?resetBoard:handeleboxClick}/>
      <Reset resetBoard={resetBoard}/>
    </div>
  )
}

export default Game