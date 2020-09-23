import React, {useEffect, useState} from "react";
import '../BoardComponent.css';
import {CardContainer} from "../Card/CardContainer";
import ListModal from "./ListModal";

export const ListWrapper = (props) => {

    const {list, setRefresh, board, orderingControl} = props;

    const token = localStorage.getItem('token');

    const [addCard, setAddCard] = useState({description: ""}) //innecesario utilizar objeto si solo hay un valor - cambiar
    const [ordering, setOrdering] = React.useState(0)
    const [numberOfLists, setNumberOfLists] = React.useState(0)

    const handleChange = (key, newValue) => {
        setAddCard({...addCard, [key]: newValue})
    }

    useEffect(() => {
        fetch(`http://localhost/api/cards_order?list_id=${list.id}`, {
            method: 'GET',
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                "content-type": "application/json",
            }),
            mode: 'cors',
        })
            .then(response => response.json())
            .then(response => {
                setOrdering(response)
            })
            .catch(error => console.log(error));
    }, [])

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
                "ordering": ordering + 1
            })
        })
            .then((response) => {
                if(response.ok) {
                    setOrdering(ordering + 1)
                    return response.json()
                }
                throw response;
            }).then(response => {
                setRefresh(false);
                setAddCard({...addCard, description: ""})
        })
    }

    useEffect(() => {
        fetch(`http://localhost/api/existing_lists?board_id=${board.id}`, {
            method: 'GET',
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                "content-type": "application/json",
            }),
            mode: 'cors',
        })
            .then(response => response.json())
            .then(response => {
                setNumberOfLists(response)
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <div className="list-wrapper">
            <div className="list-content">
                <div className="list-content-header">
                    <div className="list-header" >{list.title}</div>
                    {list && (<ListModal list={list} board={board} setRefresh={setRefresh} position={list.ordering} orderingControl={orderingControl} />)}
                </div>
                {list && list.cards.map(card => <CardContainer card={card} setRefresh={setRefresh} />)}
                <div className="card-composer-container">

                    <input className="open-card-composer"
                           id="card-create-input"
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