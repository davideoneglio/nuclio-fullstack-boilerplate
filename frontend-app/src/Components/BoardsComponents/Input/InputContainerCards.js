import React, {useState} from "react";
import { Paper, Typography, Collapse} from "@material-ui/core";
import './InputContainer.css';
import InputCard from "./InputCard";

function InputContainerCards() {

    const [open, setOpen] = useState(false);

    return (
        <div className="inputContainer">
            <Collapse in={open}>
                <InputCard className="buttonCard" setOpen={setOpen} />
            </Collapse>
            <Collapse in={!open}>
                <Paper onClick={() => setOpen(!open)}>
                    <Typography>+ Add a Card</Typography>
                </Paper>
            </Collapse>

        </div>
    )

}

export default InputContainerCards;