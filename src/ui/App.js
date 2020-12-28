import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize'
import { Navbar, Icon, Button, Modal, TextInput, Textarea } from "react-materialize"
import '../assets/css/main.scss'
import TodoItem from '../components/TodoItem'
import { openModal } from '../states/actions/navigation/openModal'
import { createTodo } from '../states/actions/todo/createTodo'
import { deleteTodo } from '../states/actions/todo/deleteTodo'
import { loadTodoFromApi } from '../states/actions/todo/loadTodoFromApi'
import { loadTodos } from "../states/actions/todo/loadTodos"
import { updateTodo } from '../states/actions/todo/updateTodo'
import { connect } from "react-redux";
import { getData } from '../api/mock'
import { filterTodos, normalizeTodo, findTodoWithId } from "../helper/todoHelper";

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = (dispatch) => ({
  createTodo: (title, description) => dispatch(createTodo(title, description)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  loadTodoFromApi: isLoading => dispatch(loadTodoFromApi(isLoading)),
  loadTodos: todoList => dispatch(loadTodos(todoList)),
  updateTodo: todoData => dispatch(updateTodo(todoData)),
  openModal: id => dispatch(openModal(id))
})

class App extends React.Component {
  addNewItem() {
    
  }

  async loadData() {
    this.props.loadTodoFromApi(true)

    let todos = await getData().catch(error => {
      M.toast({html: `Error occured ${error}`})
      console.error(error)
    })

    todos = normalizeTodo(todos)

    this.props.loadTodoFromApi(false)

    this.props.loadTodos(todos)
  }

  unDoneTodo(e) {
    setTimeout(() => {
      const id = e.target.dataset.id
      if(id !== undefined && id !== null) {
        let index = findTodoWithId(this.props.todo.todos, id)
        console.log(index)
        let todo = this.props.todo.todos[index]
        todo.status = 0
        this.props.updateTodo(todo)

        e.target.checked = true
    
        console.log(id)
      }
    }, 300);
  }

  doneTodo(e) {
    setTimeout(() => {
      const id = e.target.dataset.id
      if(id !== undefined && id !== null) {
        let index = findTodoWithId(this.props.todo.todos, id)
        let todo = this.props.todo.todos[index]
        todo.status = 1
        this.props.updateTodo(todo)

        e.target.checked = false

        console.log(id)
      }
    }, 300);
  }

  editTodo(e) {
    const id = e.target.dataset.id
  }

  componentDidMount() {
    this.loadData()
  }

  render() {
    return (
      <div>
        <Navbar
          className="nav indigo darken-4"
          centerChildren
          centerLogo
          alignLinks="right"
          brand={<a className="brand-logo" href="#">React TODO</a>}
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}>
        </Navbar>
  
        <div className="container content">
          <div className="row todo-grid">
            <div className="col s12 m6">
              <h4>To-do</h4>
              <div id="todo-list">
                {filterTodos(this.props.todo.todos, false).map((value, index) => (
                  <TodoItem onCheckChanged={e => this.doneTodo(e)} onTodoClick={e => this.editTodo(e)} completed={false} todoId={value.id} todoTitle={value.title}></TodoItem>
                ))}
              </div>
            </div>
  
            <div className="col s12 m6">
              <h4>Completed</h4>
              <div id="completed-list">
                {filterTodos(this.props.todo.todos, true).map((value, index) => (
                  <TodoItem onCheckChanged={e => this.unDoneTodo(e)} onTodoClick={e => this.editTodo(e)} completed={true} todoId={value.id} todoTitle={value.title}></TodoItem>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Modal
          actions={[
            <Button flat modal="close" node="button" waves="green">Cancel</Button>,
            <Button modal="close" node="button" waves="green">Save</Button>,
            <Button className="red" modal="confirm" node="button" waves="light">Delete</Button>
          ]}
          confirm="Are you sure?"
          bottomSheet={false}
          fixedFooter
          header={<TextInput
            id="input_todo-title"
            label="Title"
          />}
          id="main-modal"
          open={false}
          options={{
            dismissible: true,
            endingTop: '10%',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            opacity: 0.5,
            outDuration: 250,
            preventScrolling: true,
            startingTop: '4%'
          }}
          trigger={<Button
            id="main-fab"
            className="red"
            floating
            icon={<Icon>add</Icon>}
            large
            node="button"
            waves="light"
            fab="true"
            onClick={this.addNewItem}
          />}
        >
          <Textarea
            id="input_todo-details"
            label="Describe this todo item..."
          />
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
