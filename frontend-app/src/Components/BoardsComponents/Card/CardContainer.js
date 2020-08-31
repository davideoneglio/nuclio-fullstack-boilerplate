import React from "react";
import '../BoardComponent.css';

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
            <div className="list-card" >{card.description}</div>
            <div onClick={handleDeleteCard} className="delete-card-button" >X</div>
        </div>
    )
}