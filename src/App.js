import Login from './components/login/Login'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TournamentsList from './components/tournament/TournamentsList'
import ResponsiveSidebar from './components/sidebar/ResponsiveSidebar'
import Form from './components/signup/Form'

function App() {
  const existingToken = localStorage.getItem("token")

  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>

          <Route exact path='/signup'>
            <Form />
          </Route>

          <Route path='/'>

            <ResponsiveSidebar />

            <Route exact path='/tournaments/all'>
              <TournamentsList/>
            </Route>

            <Route exact path='/tournaments/manage'>
              <TournamentsList/>
            </Route>

            <Route exact path='/tournaments/create'>
              <TournamentsList/>
            </Route>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
