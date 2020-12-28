import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize'
import { Navbar, NavItem, Icon } from "react-materialize";

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
      <div className="container">
        Lorem ipsum dolor sit amet
      </div>
    </div>
  );
}

export default App;
