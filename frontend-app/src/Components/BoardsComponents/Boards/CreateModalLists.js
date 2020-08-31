import React from "react";
import Modal from "@material-ui/core/Modal";

export const CreateModalLists = ({closeModalHandler}) => {

    const logOut = () => {
        localStorage.clear();
        window.location.href = "/";
    }


    return (
        <Modal className="modal-wrapper-list">
            <button className="modal-header-title" onClick={() => logOut()}>
                Log Out
            </button>
        </Modal>
    )
}