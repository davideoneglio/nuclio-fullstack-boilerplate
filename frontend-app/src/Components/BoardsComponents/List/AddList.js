import React, {useEffect, useState} from "react";
import '../BoardComponent.css';

export const AddList = (props) => {

    const {board, setRefresh} = props;

    const token = localStorage.getItem('token');

    const [addList, setAddList] = useState({title: ""});
    const [ordering, setOrdering] = React.useState(0)

    const handleChange = (key, newValue) => {
        setAddList({...addList, [key]: newValue})
    }

    useEffect(() => {
        fetch(`http://localhost/api/lists_order?board_id=${board.id}`, {
            method: 'GET',
            headers: new Headers({
                "Authorization": `Bearer ${token}`,
                "content-type": "application/json",
            }),
            mode: "cors",
        })
            .then(response => response.json())
            .then(response => {
                setOrdering(response)
            })
            .catch(error => console.log(error));
    },[])

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
                "ordering": ordering + 1
            })
        })
            .then((response) => {
                if(response.ok) {
                    setOrdering(ordering + 1)
                    return response.json();

                }
                throw response;
            }).then(response => {
                setRefresh(false);
                setAddList({...addList, title:""})
        })
    }

    return (
        <div className="list-composer-container">
            <input className="open-list-composer"
                   placeholder="Add list"
                   value={addList.title}
                   onChange={event => handleChange("title", event.target.value)}/>

            <button type="submit"
                    className="submit-button-item"
                    value="Add list"
                    onClick={handleOnClickSubmit} >Add List</button>
        </div>
    )
}