import { useEffect, useState } from "react";
import Square from "./Square";
import winnerChecker from "../utills/WinnerChaecker";

interface Props_board {
    i : number;
    playerCheck : boolean;
    setPlayerCheck : React.Dispatch<React.SetStateAction<boolean>>;
    setGameState : React.Dispatch<React.SetStateAction<string>>;
    squares : string[];
    setSquares : React.Dispatch<React.SetStateAction<string[]>>;
    history : string[][];
    setHistory : React.Dispatch<React.SetStateAction<string[][]>>;
}

export default function Board({i, playerCheck, setPlayerCheck, setGameState, squares, setSquares, history, setHistory}:Props_board) {

    const [whoWinner, setWhoWinner] = useState<string | null>("");    

    const handleClick = (i:number) => {
        
        if(whoWinner || squares[i]){
            console.log("게임 끝");
            return
        }    
        setSquares((prevSquare)=>{
            const copySquare = [...prevSquare];
            copySquare[i] = playerCheck ? "O" : "X";
            return copySquare;
        });

        setHistory((prev) => [...prev, [...squares]]);
        setPlayerCheck(!playerCheck);
    }
    
    useEffect(()=>{
        // console.log("현재 배열", squares);
        
        const winner = winnerChecker(squares);
        setWhoWinner(winner);

        if(winner) {
            setGameState(`Winner : ${winner}`);
        } else {
            setGameState(`Next Player : ${playerCheck ? "O" : "X"}`)
        }
        
    },[squares ,playerCheck]);

    

    return(<div>
        <Square 
        value={squares[i]}
        onClick={()=>handleClick(i)}
        />
    </div>)
    //드디어 됐다 제일 최산단 컴포넌트인 Game 컴포넌트에서 playerCheck state를 만들어주고 props로 넘기니까
    // 되네 흠.. props로 연결이 안되어 있어서 어떤 버튼을 누른 상태인지 인지를 못했던거 아닐까 싶네
    // 상후한테 물어봐야겠다.
    // >> 이해 됐다 여기서 플레이어값을 지정해버리면 하나의 스퀘어에서만 작동한다
    // 그래서 다른 값을 눌렀을 때 그 플레이어 값은 완전 다른 개별적인 값이기에 유기적이지 못한 상태인것
    // 굳

    // 계속 승자가 나왔는데 안나와서 답답했는데 위의 실수랑 똑같이 했었다. 각 보드에서 9개짜리 보드를 만들어도
    // 그 보드는 9개의 각 스퀘어에서 생성될뿐 서로 유기적으로 연결되어 있지 않다.
    // 그래서 계속 비교를 해도 한줄을 채운 보드의 모음은 확인할 수 없으니까 승자가 안나왔다.
    // 제발 한 번 더 생각하고 만들자
    // 내가 만든 이 보드 컴포넌트는 하나의 스퀘어를 만들기 위한 놈이라서
    // 여기서 보드 배열을 만들어도 전체적으로 연결되지 못한다. 

}