import './App.css';
import ReactDOM from 'react-dom';
import { 
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import HomePage from './pages/HomePage';
import DreamPage from './pages/DreamPage';


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/dream'>
          <DreamPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
