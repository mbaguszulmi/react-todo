import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize'
import { Navbar, Icon } from "react-materialize"
import '../assets/css/main.scss'
import TodoItem from '../components/TodoItem'

function App() {
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
            <div className="todo-list">
              <TodoItem todoId="1" todoTitle="OK"></TodoItem>
            </div>
          </div>

          <div className="col s12 m6">
          <h4>Completed</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
