import React from 'react';
import './Lists.css'
import Cards from "./Cards";
import ActionButton from "./actions/ActionButton";
import { Droppable } from "react-beautiful-dnd";

const Lists = ({title, cards, listId}) => {
    return (
        <Droppable droppableId={String(listId)}>
            {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="title">
                    <h4>{title}</h4>
                    {cards.map((card, index) => (
                        <Cards key={card.id} index={index} text={card.text} id={card.id} />
                    ))}
                    <ActionButton listId={listId}/>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default Lists;