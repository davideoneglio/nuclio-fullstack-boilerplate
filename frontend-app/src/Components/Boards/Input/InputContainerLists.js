import React, {useState} from "react";
import { Paper, Typography, Collapse} from "@material-ui/core";
import './InputContainer.css';
import InputList from "./InputList";

function InputContainerList() {

    const [open, setOpen] = useState(false)

    return (
        <div className="inputContainer">
            <Collapse in={open}>
                <InputList setOpen={setOpen}/>
            </Collapse>
            <Collapse in={!open}>
                <Paper onClick={() => setOpen(!open)}>
                    <Typography>+ Add a List</Typography>
                </Paper>
            </Collapse>

        </div>
    )

}

export default InputContainerList;