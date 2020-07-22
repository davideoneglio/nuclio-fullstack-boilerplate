import React, {useState} from "react";
import List from "./List/List";
import InputContainerList from "./Input/InputContainerLists";
import "./Boards.css";
import data from "./boards.json";


function Boards(props) {


    fetch('http://127.0.0.1:80/boards', {
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
        <div className="root">

                {data.list.map((list) =>
                    <List title={list.title} cards={list.cards} boardId={data.id} />
                )}

            <div>
                <InputContainerList lists={data.list} />
            </div>
        </div>

    );
}
export default Boards;


/* hacer un fetch al backend para que devolva tod las lists de este board ----> ok */
/* hacer un .map com as lists como fiz no list.js con las card ----> ok */
