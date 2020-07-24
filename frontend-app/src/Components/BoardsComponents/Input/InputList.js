import React, {useState} from "react";
import { Paper, InputBase, Button, IconButton} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';
import './InputList.css';

function InputList({ setOpen }) {

    const [valor, setValor] = useState("");

    function handleOpen() {
        return setOpen(false);
    }

    return (
        <div>
            <div>
                <Paper className="inputList">
                    <InputBase onBlur={handleOpen} placeholder="Enter a List" />
                </Paper>
            </div>
            <div className="buttonList">
                <Button onBlur={handleOpen}>Add List</Button>
                <IconButton onClick={handleOpen}><ClearIcon /></IconButton>
            </div>
        </div>
    )

}
export default InputList;