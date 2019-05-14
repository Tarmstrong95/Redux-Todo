import React from 'react';
import {connect} from 'react-redux';
import addTodo from '../actions';


class TodoList extends React.Component {
    state = {
        todo: ''
    }


    handleChanges = (e) => {
        this.setState({
            todo: e.target.value
        })
    }

    render(){
        return(
            <div>
                {this.props.todoList.map(todo => 
                    <p>{todo.value}</p>
                    )}
                    <input onChange={this.handleChanges} value={this.state.todo}/>
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
export default connect( mapStateToProps,  {addTodo})(TodoList);