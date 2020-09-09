import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import BoardHeader from "../BoardHeader/BoardHeader";
import {ListWrapper} from "../List/ListWrapper";
import {AddList} from "../List/AddList";


const RenderBoard = (props) => {

    const {match} = props

    const id = match.params.id;
    const token = localStorage.getItem('token');

    const [board, setBoard] = useState(undefined);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        if(!refresh) {
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
                    setRefresh(true);
                })
                .catch(error => console.log(error));
            }
        }, [refresh])

    return (
        <div>
            <Navbar setRefresh={setRefresh} />
            <BoardHeader />
            <div id="board" className="render-board-screen">
                {board && board.lists.map(list => <ListWrapper list={list} setRefresh={setRefresh} />)}
                {board && <AddList board={board.board} setRefresh={setRefresh}/>}
            </div>
        </div>
    );
}
export default RenderBoard;