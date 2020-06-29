import React, {Component} from 'react';
import Lists from "./Lists/Lists.js";
import "../InitialBoard/initialBoard.css"
import { connect } from "react-redux"
import ActionButton from "./actions/ActionButton"
import { DragDropContext } from "react-beautiful-dnd";

class initialBoard extends Component {

    onDragEnd = () => {

    }

    render() {

        const {lists} = this.props;

        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="board">
                    <img alt="Trello" className="trello-logo"
                         src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg" />
                    <div className="listsContainer">
                        {lists.map(list => (
                            <Lists listId={list.id} key={list.id} title={list.title} cards={list.cards}/>
                        ))}
                        <ActionButton list />
                    </div>
                </div>
            </DragDropContext>
        );
    }
}

const mapStateToProps = state => ({
    lists: state.lists
});


export default connect(mapStateToProps) (initialBoard);
