import React from "react";

export const CreateModalUser = () => {
    const logOut = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    //fetch(API + `?_start=0&_limit=5`//

    return (
        <div className="modal-wrapper">
            <button onClick={() => logOut()}>
                Log Out
            </button>
        </div>
    );
}

