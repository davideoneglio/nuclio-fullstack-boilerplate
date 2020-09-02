import React from "react";
import '../BoardComponent.css';
import ListModal from "../List/ListModal";
import CardModal from "./CardModal";

export const CardContainer = (props) => {

    const {card, setRefresh} = props;

    const token = localStorage.getItem('token');

    const handleDeleteCard = () => {
        fetch(`http://localhost/api/card/${card.id}`, {
            method: "delete",
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                "content-type": "application/json",
            }),
            mode: 'cors',
        }).then(response => response.json())
            .then(response => {
                setRefresh(false)
            })
    }

    return (
        <div className="list-card-details" >
            <CardModal id={card.id} description={card.description} />
            <div onClick={handleDeleteCard} className="delete-card-button" >X</div>
        </div>
    )
}