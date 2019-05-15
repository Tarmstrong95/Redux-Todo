import React from 'react';
import { connect } from 'react-redux';
import {addTodo, toggleTrue} from '../actions';
import './todo.css'


class TodoList extends React.Component {
    state = {
        todo: ''
    }


    handleChanges = (e) => {
        this.setState({
            todo: e.target.value
        })
    }

    render() {
        return (
            <div>
                {this.props.todoList.map((todo, i) =>
                    <p className="toggle" onClick={() => {
                        this.props.toggleTrue(todo.id)
                    }} key={Date.now() + i}>
                    {todo.value}
                    {todo.completed && <span>-done</span>}
                    </p>
                )}
                <input onChange={this.handleChanges} value={this.state.todo} />
                <button onClick={(e) => {
                    e.preventDefault();
                    this.props.addTodo(this.state.todo);
                    this.setState({
                        todo: ''
                    })
                }}>ADD TODO</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    }
}
export default connect(mapStateToProps, { addTodo, toggleTrue })(TodoList);