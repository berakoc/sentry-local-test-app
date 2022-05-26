import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './components/Home';
import Todo from './components/Todo';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/todo/:id">
        <Todo />
      </Route>
    </Switch>
  );
}

export default App;
