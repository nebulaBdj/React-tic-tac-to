export default function winnerChecker(squares:string[]) {
    const wincase:number[][]= [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for( let i:number = 0; i < wincase.length; i++){
        const [a, b, c] = wincase[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }

    return null;
    
}
