import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize'
import { Navbar, Icon, Button, Modal, TextInput, Textarea } from "react-materialize"
import '../assets/css/main.scss'
import TodoItem from '../components/TodoItem'

class App extends React.Component {
  addNewItem() {
    
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

export default App
