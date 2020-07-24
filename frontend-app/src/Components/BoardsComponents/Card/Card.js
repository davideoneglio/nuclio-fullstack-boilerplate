import React, {useState} from "react";
import {Paper, Typography} from '@material-ui/core';
import './Card.css';

function Card({content}) {

    const [open, setOpen] = useState(false);
    const [valor, setValor] = useState(content);

    return (
        <div className="card">
            <Paper>
                {open? (
                    <div>
                        <input type="text" id="newContent"
                               onBlur={() => setOpen(!open)}
                               onChange={() => setValor(document.getElementById("newContent").value)}
                               value={valor}
                        />
                    </div>
                ) : (
                    <div className="editableTitleContainer">
                        <Typography onClick={() => setOpen(!open)} className="editableTitle" >{valor}</Typography>
                    </div>

                )}
            </Paper>
        </div>
    )
}
export default Card;