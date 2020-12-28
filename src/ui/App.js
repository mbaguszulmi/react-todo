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
import { getCurrentDateStr } from "../helper/dateHelper";
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
    this.props.openModal(0)

    document.querySelector("#input_todo-title").value = undefined
    document.querySelector("#input_todo-details").value = undefined
  }

  async loadData() {
    this.props.loadTodoFromApi(true)

    let todos = await getData().catch(error => {
      M.toast({html: `Error occured ${error}`})
      console.error(error)
    })

    this.props.loadTodoFromApi(false)

    this.props.loadTodos(todos)
  }

  loadCurrentTodo(id) {
    let todo
    if (id != 0) {
      let index = findTodoWithId(this.props.todo.todos, id)
      todo = this.props.todo.todos[index]
    }

    if (todo !== undefined) {
      return todo;
    }

    return {
      id: 0,
      title: null,
      description: null,
      status: 0,
      createdAt: getCurrentDateStr()
    }
  }

  deleteTodo(id) {
    setTimeout(() => {
      this.props.deleteTodo(id)
    }, 300);
  }

  saveTodo(id) {
    let index = findTodoWithId(this.props.todo.todos, id)
    let todo = this.props.todo.todos[index]
    todo = {
      ...todo,
      title: document.querySelector("#input_todo-title").value,
      description: document.querySelector("#input_todo-details").value,
    }

    this.props.updateTodo(todo)
  }

  addTodo() {
    this.props.createTodo(document.querySelector("#input_todo-title").value, document.querySelector("#input_todo-details").value)
  }

  unDoneTodo(e) {
    setTimeout(() => {
      const id = e.target.dataset.id
      if(id !== undefined && id !== null) {
        let index = findTodoWithId(this.props.todo.todos, id)
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
    this.props.openModal(id)
    document.querySelector("#main-fab").click()

    let todo = this.loadCurrentTodo(id)

    document.querySelector("#input_todo-title").value = todo.title
    document.querySelector("#input_todo-details").value = todo.description
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
            <Button id="save-btn" onClick={e => this.props.navigation.openModal != 0 ?  this.saveTodo(this.props.navigation.openModal) : this.addTodo()} modal="close" node="button" waves="green">Save</Button>,
            <Button id="delete-btn" modal="close" onClick={e => this.deleteTodo(this.props.navigation.openModal)} style={this.loadCurrentTodo(this.props.navigation.openModal).status != 0 || this.loadCurrentTodo(this.props.navigation.openModal).id == 0 ? {display: 'none'} : {}} className="red" node="button" waves="light">Delete</Button>
          ]}
          confirm="Are you sure?"
          bottomSheet={false}
          fixedFooter
          header={
            <div className="row">
              <div className="col s8">
                <TextInput
                  disabled={false}
                  id="input_todo-title"
                  label="Title"
                />
              </div>
              <div id="date-todo" className="col s4">{this.loadCurrentTodo(this.props.navigation.openModal).createdAt}</div>
            </div>
          }
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
            disabled={false}
            id="input_todo-details"
            label="Describe this todo item..."
          />
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
