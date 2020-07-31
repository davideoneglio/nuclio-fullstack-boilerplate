import React from "react";

export const CreateModalUser = () => {
    const logOut = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    return (
        <div className="modal-wrapper">
            <button onClick={() => logOut()}>
                Log Out
            </button>
        </div>
    );
}

