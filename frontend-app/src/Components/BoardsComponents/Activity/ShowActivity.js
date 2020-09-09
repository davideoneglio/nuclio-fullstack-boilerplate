import React, {useEffect, useState} from "react";
import './ActivityStyles.css';

export const ShowActivity = (props) => {

    const {id} = props;

    const [refreshCard, setRefreshCard] = React.useState(false);
    const [renderActivities, setRenderActivities] = React.useState([]); //con esto evito hacer el primer render en undefinded
    const [addActivity, setAddActivity] = useState({text: "Add activity"});

    const token = localStorage.getItem('token');

    const handleChange = (key, newValue) => {
        setAddActivity({...addActivity, [key]: newValue})
    }

    const handleOnClickSubmit = () => {
        fetch("http://localhost/api/card_activity", {
            "method": "POST",
            "mode": "cors",
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            "body": JSON.stringify({
                "text": addActivity.text,
                "card_id": id,
                //añadir un ordering en la activity, puede haber más de una
            })
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            }).then(response => {
            setAddActivity({text: "Add activity"})
            setRefreshCard(false);
        })
    }

    useEffect(() => {
        if(!refreshCard) {
            fetch(`http://localhost/api/card_activity/card/${id}`, {
                method: 'GET',
                headers: new Headers({
                    'Authorization': `Bearer ${token}`,
                    "content-type": "application/json",
                }),
                mode: 'cors',
            })
                .then(response => response.json())
                .then(response => {
                    setRenderActivities(response);
                    setRefreshCard(true);
                })
                .catch(error => console.log(error));
        }
    }, [refreshCard])

    return (
        <div className="list-composer-container-activity">
            {renderActivities.map((activity) => <p>{activity.text}</p>)}
            <br/>
            <input className="open-list-composer"
                   value={addActivity.text}
                   onChange={event => handleChange("text", event.target.value)}/>

            <button type="submit"
                    className="submit-button-card"
                    value="Add activity"
                    onClick={handleOnClickSubmit} >Add Activity</button>
        </div>

    )

}