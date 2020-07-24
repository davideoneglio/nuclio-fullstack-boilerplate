import React from "react";
import Boards from "../Boards/Boards";
import data from "../boards.json";



function RenderBoard () {


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
            {data.board.map((board) =>
                <Boards {...board}/>
            )}

        </div>

    );
}
export default RenderBoard;