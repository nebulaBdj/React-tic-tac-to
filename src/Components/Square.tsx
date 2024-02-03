/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";

interface Props_square {
    value : string | null;
    onClick : () => void;
}

const styled = css`
width: 40px;
height: 40px;
position: fix;
`

export default function Square({value, onClick}:Props_square){

    return(<>
        <button css={styled} onClick={()=>onClick()}>
            {value}
        </button>
    </>)
}