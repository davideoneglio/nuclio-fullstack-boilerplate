import React from 'react'
import './BoardPreView.css'

const BoardPreView = props => {

    const {name, owner} = props

    return(
        <div className={"pre-board-view"}>
            <p>{name}</p>
        </div>
    )
}

export default BoardPreView;