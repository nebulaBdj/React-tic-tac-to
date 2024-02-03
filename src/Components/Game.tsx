/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import Board from "./Board";

export default function Game(){

    const [playerCheck, setPlayerCheck] = useState<boolean>(true);  
    const [gameState, setGameState] = useState<string>("");
    const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
    const [history, setHistory] = useState<string[][]>([Array(9).fill(null)]);

    const forMapArr1:number[] = [0, 1, 2];
    const forMapArr2:number[] = [3, 4, 5];
    const forMapArr3:number[] = [6, 7, 8];

    // const winner = winnerChecker(squares);
    // console.log("승자", winner);
    // if(winner){
    //     setGameState(`Winner : ${winner}`);
    // } else {
    //     setGameState(`Next Player : ${playerCheck ? "O" : "X"}`);
    // }

    // 위의 사례도 이전에 핸드클릭 함수 안에서 위너체크 함수를 실행시키고 winner 유즈스테이트에 넣었기 때문에 
    // 여기서 setGameState로 gameState에 결과를 넣는 순간 setwinner 유즈 스테이트가 동시에 실행되면서
    // 무한 루프를 돈것이다.
    // 드디어 해결

    const jumpTo = (index:number) => {
        setSquares(history[index]);
        if(index === 0) {
            setHistory([Array(9).fill(null)]);
        }
    }

    const divStyled = css`
        width: 120px;
        height: 120px;
    `
    const fixHeight = css`
        height: 40px;
        display: flex;
    `
    

    return (<div>
        <div>
            {gameState}
        </div>
        <div css={divStyled}>
            <div css={fixHeight}>
                {forMapArr1.map((forMapArr1)=>{
                    return(<Board
                        key={forMapArr1}
                        i={forMapArr1} 
                        playerCheck={playerCheck} 
                        setPlayerCheck={setPlayerCheck} 
                        setGameState={setGameState} 
                        squares={squares} 
                        setSquares={setSquares}
                        history={history}
                        setHistory={setHistory}
                    />)
                })}
            </div>
            <div css={fixHeight}>
                {forMapArr2.map((forMapArr2)=>{
                    return(<Board
                        key={forMapArr2}
                        i={forMapArr2} 
                        playerCheck={playerCheck} 
                        setPlayerCheck={setPlayerCheck} 
                        setGameState={setGameState} 
                        squares={squares} 
                        setSquares={setSquares}
                        history={history}
                        setHistory={setHistory}
                    />)
                })}
            </div>
            <div css={fixHeight}>
                {forMapArr3.map((forMapArr3)=>{
                    return(<Board
                        key={forMapArr3}
                        i={forMapArr3} 
                        playerCheck={playerCheck} 
                        setPlayerCheck={setPlayerCheck} 
                        setGameState={setGameState} 
                        squares={squares} 
                        setSquares={setSquares}
                        history={history}
                        setHistory={setHistory}
                    />)
                })}
            </div>
        </div>
        <div>
            {history.map((history, index)=>{
                const desc = index ? 
                    `Go to Move #${index}` :
                    "Go to Start";
                return(<div key={index}>
                    <button onClick={()=>jumpTo(index)}>{desc}</button>
                </div>)
            })}
        </div>    
    </div>)
}