import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize'
import { Navbar, Icon, Button } from "react-materialize"
import '../assets/css/main.scss'
import TodoItem from '../components/TodoItem'

class App extends React.Component {
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
                <TodoItem todoId="1" todoTitle="OK"></TodoItem>
              </div>
            </div>
  
            <div className="col s12 m6">
              <h4>Completed</h4>
              <div id="completed-list">
                <TodoItem className="completed" todoId="2" todoTitle="OK"></TodoItem>
              </div>
            </div>
          </div>
        </div>
  
        <Button
          className="red"
          floating
          icon={<Icon>add</Icon>}
          large
          node="button"
          waves="light"
          fab="true"
          onClick={(event) => {
            
          }}
        />
      </div>
    )
  }
}

export default App
