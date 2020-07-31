import React from "react";
import { Paper, CssBaseline } from "@material-ui/core";
import "./List.css";
import Title from "../Title/Title";
import Card from "../Card/Card";
import InputContainerCards from "../Input/InputContainerCards";

function List({ title, cards }) {


/* hacer un fetch al backend para que devolva todos las cards de esta list */



    return (
        <div className="lists">
            <Paper>
                <CssBaseline />
                <Title text={title}/>
                {cards.map((card) =>
                    <Card content={card.content}/>
                )}

                <InputContainerCards cards={cards.content}/>
            </Paper>


        </div>
    )
}

export default List;