import React from "react";


export const Boardd = ({board}) => {

    debugger;

    return (
        <div>
            {board && (
                <div>
                    <div>{board.board.title}</div>
                    <div>{board.board.user_id}</div>
                </div>)}
        </div>
    )
}

