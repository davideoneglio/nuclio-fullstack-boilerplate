import React, {useState} from "react";
import '../BoardComponent.css';

export const AddList = (props) => {

    const {board, setRefresh} = props;

    const token = localStorage.getItem('token');

    const [addList, setAddList] = useState({title: "Add another list"});

    const handleChange = (key, newValue) => {
        setAddList({...addList, [key]: newValue})
    }

    const handleOnClickSubmit = () => {
        fetch("http://localhost/api/list", {
            "method": "POST",
            "mode": "cors",
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            "body": JSON.stringify({
                "title": addList.title,
                "board_id": board.id,
                "ordering": 1
            })
        })
            .then((response) => {
                if(response.ok) {
                    return response.json();

                }
                throw response;
            }).then(response => {
                setRefresh(false);
                setAddList({...addList, title:"Add another list"})
        })
    }

    return (
        <div className="list-composer-container">
            <input className="open-list-composer"
                   value={addList.title}
                   onChange={event => handleChange("title", event.target.value)}/>

            <button type="submit"
                    className="submit-button-card"
                    value="Add card"
                    onClick={handleOnClickSubmit} >Add List</button>

        </div>

    )
}