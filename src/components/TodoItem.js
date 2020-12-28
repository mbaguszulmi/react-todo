import React from 'react';
import { Checkbox } from "react-materialize";

class TodoItem extends React.Component {
    render() {
        return (
            <div className="todo-item">
                <Checkbox value="1" data-id={this.props.todoId} onChange={this.props.onCheckChanged} />
                <div className="todo-title" onClick={this.props.onTodoClick}>
                    {this.props.todoTitle}
                </div>
            </div>
        )
    }
}

export default TodoItem