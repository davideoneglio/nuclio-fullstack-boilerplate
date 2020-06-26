import React, {Component} from 'react';
import Lists from "./Lists.js";
import "./App.css"
import { connect } from "react-redux"
import ActionButton from "./actions/ActionButton";
import { DragDropContext } from "react-beautiful-dnd";

class App extends Component {

    onDragEnd = () => { /* Reordenar Lógica */

    }

    render() {

        const {lists} = this.props;

        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="App">
                    <h1>Initial Board</h1>
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


export default connect(mapStateToProps)(App);
