import Login from './components/login/Login'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import TournamentsList from './components/tournament/TournamentsList'
import TournamentManagerList from './components/tournament_manager/TournamentManagerList'
import ResponsiveSidebar from './components/sidebar/ResponsiveSidebar'
import Signup from './components/signup/Signup'
import TournamentBracket from './components/helpers/TournamentBracket'

function App() {
  const existingToken = localStorage.getItem("token")

  const logout = () => {
    localStorage.clear()
    window.location.href = '/'
  }


  return (
    <Router>
      <div className='container'>
        <Switch>

          <Route exact path='/login'>
            {existingToken && <Redirect to="/tournaments/all" />}
            <Login />
          </Route>

          <Route exact path='/signup'>
            {existingToken && <Redirect to="/tournaments/all" />}
            <Signup />
          </Route>

          <Route exact path="/logout" render={logout} />

          <Route exact path='/'>
            {existingToken ? <Redirect to="/tournaments/all"/> : <Redirect to="/login"/>}
          </Route>




            <Route exact path='/tournaments/manage'>
              <ResponsiveSidebar />
              <TournamentManagerList />
            </Route>

            <Route exact path='/tournaments/create'>
              <ResponsiveSidebar />
              <TournamentsList />
            </Route>

            <Route exact path='/bracket'>
             <ResponsiveSidebar />
              <TournamentBracket />
            </Route>

            <Route path='/tournaments'>
              <ResponsiveSidebar />
              <TournamentsList />
            </Route>
            <Route path='/'>
            {existingToken ? <Redirect to="/tournaments/all"/> : <Redirect to="/login"/>}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
