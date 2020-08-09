import React, {useEffect, useState} from "react";
import Boards from "../Boards/Boards";
import data from "../boards.json";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import BoardHeader from "../BoardHeader/BoardHeader";
import {Boardd} from "../boardstestpepe";


const RenderBoard = (props) => {

    const {match} = props

    const id = match.params.id;
    const token = localStorage.getItem('token');

    const [board, setBoard] = useState(undefined);
    console.log(board);

    useEffect(() => {
        fetch(`http://localhost/api/boardata/${id}`, {
            method: 'GET',
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                "content-type": "application/json",
            }),
            mode: 'cors',
        })
            .then(response => response.json())
            .then(response => {
                setBoard(response);
            })
            .catch(error => console.log(error));
    }, [id])

    return (
        <div>
            <Navbar />
            <BoardHeader />
            {board && (<p>{board.board.title}</p>)}
        </div>
    );
}
export default RenderBoard;