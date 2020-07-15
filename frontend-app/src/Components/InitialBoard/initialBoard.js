import React, { useEffect, useState } from 'react';
import Lists from "./Lists/Lists";
import "./initialBoard.css"
import ActionButton from "./actions/ActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "./actions";
import boards from "./boards.json";


const InitialBoard = (props) => {

    let lists = boards[0].lists;

    const onDragEnd = (result) => {
        const { destination, source, draggableId, type } = result;

        if(!destination) {
            return 0;
        }
        props.dispatch(
            sort(
                source.droppableId,
                destination.droppableId,
                source.index,
                destination.index,
                draggableId,
                type
            )
        );
    };

    useEffect(() => {

        const url = 'http://localhost/api/boards/{id}';         /*utilizar ${id} com aspas com crase*/

        const options = {
            method: 'GET',
            headers: new Headers({
                Accept: 'application/json',
                'Access-Control-Allow-Headers':
                    'Authorization',
                'Content-Type': 'application/json',
            }),
            mode:'cors',
        };

        fetch(url, options)
            .then(response => {
                if(response.status === 200) {
                    return response.json();
                }
            })
            .then(data => {
                console.log(data);


            })
            .catch(error => {
                console.log('Hubo un problema con la petición! Error:' + error);
            })

    }, []);



    return (

        <DragDropContext onDragEnd={onDragEnd}>
            <div className="header-board">
                <div className="header-buttons">
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M8 16h2v-2H8v2zm-3-6h2V8H5v2zm0-6h2V2H5v2zm3 9h2v-2H8v2zm-3 3h2v-2H5v2zM2 7h2V5H2v2zm0 9h2v-2H2v2zM2 4h2V2H2v2zm0 6h2V8H2v2zm6 0h2V8H8v2zm-6 3h2v-2H2v2zm12 0h2v-2h-2v2zm0 3h2v-2h-2v2zm0-6h2V8h-2v2zm0-3h2V5h-2v2zm0-5v2h2V2h-2zM8 4h2V2H8v2zm3 0h2V2h-2v2zM8 7h2V5H8v2zm3 9h2v-2h-2v2zm0-6h2V8h-2v2z"/></svg> </button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg></button>
                    <button>Tableros</button>
                    <button>Search<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></button>
                    <img alt="Trello" className="trello-logo"
                         src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg" />
                    <div className="header-right-buttons">
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></button>
                        <button width="18" height="18"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/></svg></button>
                        <button> <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg></button>
                    </div>
                </div>

                <Droppable droppableId="all-lists" direction="horizontal" type="list">
                    {provided => (
                        <div className="listsContainer" {...provided.droppableProps} ref={provided.innerRef}>
                            {lists.map((list, index) => (
                                <Lists listId={list.id} key={list.id} title={list.title} cards={list.cards} index={index}/>
                            ))}
                            <ActionButton list />
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
}



export default InitialBoard;