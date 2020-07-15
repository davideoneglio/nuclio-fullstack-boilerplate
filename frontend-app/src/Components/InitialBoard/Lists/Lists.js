import React from 'react';
import './Lists.css'
import Cards from "../Cards/Cards";
import ActionButton from "../actions/ActionButton";
import { Droppable, Draggable } from "react-beautiful-dnd";

const Lists = ({title, cards, listId, index}) => {
    return (
        <Draggable draggableId={String(listId)} index={index}>
            {provided => (
                <div {...provided.draggableProps} ref={provided.innerRef} className="title" {...provided.dragHandleProps}>
                    <Droppable droppableId={String(listId)}>
                        {provided => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                <h4>{title}</h4>
                                {cards.map((card, index) => (
                                    <Cards key={card.id} index={index} text={card.text} id={card.id} />
                                ))}
                                {provided.placeholder}
                                <ActionButton listId={listId} />
                            </div>
                        )}
                    </Droppable>
                </div>
            )}

        </Draggable>
    );

};

export default Lists;