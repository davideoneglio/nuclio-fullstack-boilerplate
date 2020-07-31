import React, {useEffect, useState} from "react";
import Boards from "../Boards/Boards";
import data from "../boards.json";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import BoardHeader from "../BoardHeader/BoardHeader";


const RenderBoard = (props) => {

    const {match} = props

    const id = match.params.id;
    const token = localStorage.getItem("key");

    const [board, setBoard] = useState("");
    //let board = data.board.filter(board => board.id===id)

    useEffect(() => {
        fetch(`http://localhost/api/board/${id}`, {
            method: 'GET',
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                "content-type": "application/json",
            }),
            mode: 'cors',
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
            })
            .then(data => {
                setBoard(data);
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <div>
            <Navbar />
            <BoardHeader />
            {board &&
                <div>
                    {board.map((board) =>
                        <Boards {...board}/>
                    )}
                </div>
            }

        </div>

    );
}
export default RenderBoard;