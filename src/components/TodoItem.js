import React from 'react';
import { Checkbox } from "react-materialize";

class TodoItem extends React.Component {
    render() {
        return (
            <div className={`todo-item ${this.props.completed ? 'completed' : ''} ${this.props.className?? ''}`}>
                <Checkbox id={`item_${this.props.todoId}`} checked={this.props.completed} value="1" data-id={this.props.todoId} onChange={this.props.onCheckChanged} />
                <div className="todo-title" data-id={this.props.todoId} onClick={this.props.onTodoClick}>
                    {this.props.todoTitle}
                </div>
            </div>
        )
    }
}

export default TodoItem