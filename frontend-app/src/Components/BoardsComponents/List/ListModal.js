import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50
    const left = 50

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
        height: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        outline: 0,
    },
}));

export default function ListModal(props) {

    const {id, setRefresh} = props

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const token = localStorage.getItem('token');

    const handleDeleteList = () => {
        fetch(`http://localhost/api/list/${id}`, {
            method: "delete",
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                "content-type": "application/json",
            }),
            mode: 'cors',
        }).then(response => response.json())
            .then(response => {
                setRefresh(false)
                setOpen(false)
            })
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <button onClick={handleDeleteList}>Delete List</button>
        </div>
    );

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                ...
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}