import React from "react";
import Icon from "@material-ui/core/Icon";
import "./ActionButton.css";
import TextareaAutosize from 'react-autosize-textarea';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";

class ActionButton extends React.Component {

    state = {
        formularioOpen: false,
        text: ""
    };

    openFormulario = () => {
        this.setState({
            formularioOpen: true
        });
    };

    closeFormulario = e => {
        this.setState({
            formularioOpen: false
        });
    };

    handleChange = e => {
        this.setState({
            text: e.target.value
        });
    };

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if(text) {
            this.setState({
                text: ""
            });
            dispatch(addList(text))
        }

        return;
    };

    handleAddCard = () => {
        const { dispatch, listId } = this.props;
        const { text } = this.state;

        if(text) {
            this.setState({
                text: ""
            });
            dispatch(addCard(listId, text))
        }
    }



    renderAddButton = () => {
        const {list} = this.props;

        const buttonText = list ? "Añadir otra lista" : "Añadir otra tarjeta"


        return (
            <div className="formButton" onClick={this.openFormulario}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    };

    renderFormulario = () => {
        const {list} = this.props;

        const placeHolder = list ? "Enter List Title: " : "Enter Card Title: ";

        const buttonTitle = list ? "Añadir Lista" : "Añadir Tarjeta";

        return (
            <div>
                <Card className="card">
                    <TextareaAutosize
                        className="textArea"
                        placeHolder={placeHolder}
                        autoFocus
                        onBlur={this.closeFormulario}
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </Card>

                <div className="buttonGroup">
                    <Button onMouseDown={ list ? this.handleAddList : this.handleAddCard} variant="contained">{buttonTitle} {" "} </Button>
                    <Icon className="buttonClose">close</Icon>
                </div>
            </div>
        );
    };

    render () {
        return this.state.formularioOpen ? this.renderFormulario() : this.renderAddButton();
    };
}

export default connect() (ActionButton);