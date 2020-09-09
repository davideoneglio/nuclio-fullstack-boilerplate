import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {useHistory} from 'react-router-dom';

function getModalStyle() {
    const top = 20
    const left = 45

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'fixed',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        outline: 0,
    },
}));

export default function BoardModal(props) {

    const {id, setRefresh, open, handleClose} = props

    const history = useHistory();

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [addBoard, setAddBoard] = React.useState({title: "Add board"})

    const handleChange = (key, newValue) => {
        setAddBoard({...addBoard, [key]: newValue})
    }

    const token = localStorage.getItem('token');

    //GESTIONAR RESPONSE CUANDO BOARD YA CREADO - REDIRECT AL BOARD CREADO
    const handleOnClickSubmit = () => {
        fetch("http://localhost/api/board", {
            "method": "POST",
            "mode": "cors",
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            "body": JSON.stringify({
                "title": addBoard.title,
                "id": id
            })
        })
            .then((response) => {
                if(response.ok) {
                    return response.json();

                }
                throw response;
            }).then(response => {
                history.push(`/board/${response.id}`)
        })
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>

            <textarea autoFocus={true} onChange={event => handleChange("title", event.target.value)}>Add new Board</textarea>

            <button type="submit"
                    className="#"
                    value="Add board"
                    onClick={handleOnClickSubmit}>Add board</button>
        </div>
    );

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                disableBackdropClick={true}
            >
                {body}
            </Modal>
        </div>

    );
}