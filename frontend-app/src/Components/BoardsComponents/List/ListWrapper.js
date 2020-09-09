import React, {useState} from "react";
import '../BoardComponent.css';
import {CardContainer} from "../Card/CardContainer";
import ListModal from "./ListModal";

export const ListWrapper = (props) => {

    const {list, setRefresh} = props;

    const token = localStorage.getItem('token');

    const [addCard, setAddCard] = useState({description: ""}) //innecesario utilizar objeto si solo hay un valor - cambiar

    const handleChange = (key, newValue) => {
        setAddCard({...addCard, [key]: newValue})
    }

    const handleOnClickSubmit = () => {
        fetch("http://localhost/api/card", {
            "method": "POST",
            "mode": "cors",
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            "body": JSON.stringify({
                "description": addCard.description,
                "list_id": list.id,
                "ordering": 1
            })
        })
            .then((response) => {
                if(response.ok) {
                    return response.json()
                }
                throw response;
            }).then(response => {
                setRefresh(false);
                setAddCard({...addCard, description: ""})
        })
    }

    return (
        <div className="list-wrapper">
            <div className="list-content">
                <div className="list-content-header">
                    <div className="list-header" >{list.title}</div>
                    {list && (<ListModal id={list.id} setRefresh={setRefresh} />)}
                </div>
                {list && list.cards.map(card => <CardContainer card={card} setRefresh={setRefresh} />)}
                <div className="card-composer-container">

                    <input className="open-card-composer"
                           placeholder="Add card"
                           value={addCard.description}
                           onChange={event => handleChange("description", event.target.value)}/>

                    <button type="submit"
                            className="submit-button-card"
                            value="Add card"
                            onClick={handleOnClickSubmit} >Add card</button>
                </div>
            </div>
        </div>
    )
}