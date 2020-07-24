import React, {useState} from "react";
import { Typography } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import './Title.css';

function Title(props) {

    const [open, setOpen] = useState(false);
    const [valor, setValor] = useState(props.text);

    return(
        <div className="typo">
            {open? (
                <div>
                    <input type="text" id="newTitle"
                           onBlur={() => setOpen(!open)}
                           onChange={() => setValor(document.getElementById("newTitle").value)}
                           value={valor}
                    />
                </div>
            ) : (
                <div className="editableTitleContainer">
                    <Typography onClick={() => setOpen(!open)}  className="editableTitle">{valor}</Typography>
                    <MoreHorizIcon />
                </div>

            )}
        </div>
    )
}

export default Title;