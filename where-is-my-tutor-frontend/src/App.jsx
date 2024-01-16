import React from 'react'
import Navbar from './navbar'
import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom'
import Login from './componants/login'



function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            { <li>
              <Link to="/">Navbar</Link>
            </li> }
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {<Route path="/">
            <Navbar />
          </Route> }
        </Switch>
      </div>
    </Router>
  );
}
 export default App;



