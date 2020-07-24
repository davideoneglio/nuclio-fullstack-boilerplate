import React from "react";
import Boards from "../Boards/Boards";
import data from "../boards.json";
import { useParams } from "react-router-dom";


function RenderBoard () {

    let { id } = useParams();

    let board = data.board.filter(board => board.id===id)


    fetch('http://127.0.0.1:80/board', {
        method: 'GET',
        headers: new Headers({
            Accept: 'application/json',
            'Access-Control-Allow-Headers': 'Authorization',
            'Content-Type': 'application/json',
        }),
        mode: 'cors',
    })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
        })
        .then(data => {
            console.log(JSON.stringify(data));
        })
        .catch(error => console.log(error));



    return (
        <div>
            {board.map((board) =>
                <Boards {...board}/>
            )}

        </div>

    );
}
export default RenderBoard;