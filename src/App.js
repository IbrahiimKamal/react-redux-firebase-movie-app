import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import { HomePage } from './pages';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
