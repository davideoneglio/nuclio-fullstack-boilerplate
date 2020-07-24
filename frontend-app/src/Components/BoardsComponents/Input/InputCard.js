import React, {useState} from "react";
import { Paper, InputBase, Button, IconButton} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';
import './InputCard.css';

function InputCard({ setOpen }) {

    const [valor, setValor] = useState("");

    function handleOpen ()  {
        return setOpen(false);
    }

    return (
        <div>
            <div>
                <Paper className="inputCard">
                    <InputBase onBlur={handleOpen} placeholder="Enter a Card" />
                </Paper>
            </div>
            <div className="buttonCard">
                <Button onBlur={handleOpen}>Add Card</Button>
                <IconButton onClick={handleOpen}><ClearIcon /></IconButton>
            </div>
        </div>
    )
}
export default InputCard;
