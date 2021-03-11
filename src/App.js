import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import LeagueDetail from './components/League/LeagueDetail/LeagueDetail';

function App() {
  // const [leagues, setLeagues] = useState([]);
  // useEffect(() => {
  //   fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
  //   .then(res => res.json())
  //   .then(data => {
  //     setLeagues(data.leagues)
  //     console.log(data.leagues)}) //setLeagues(data)
  // }, [])
  return (
    <div>
      {/* <h1>length {leagues.length}</h1> */}
      {/* {
        leagues.map(league => <League league={league}></League>)
      } */}
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about/:leagueId">
            <LeagueDetail></LeagueDetail>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
