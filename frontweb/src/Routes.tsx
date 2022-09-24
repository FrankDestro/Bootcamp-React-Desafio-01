import Navbar from 'components/Navbar';
import Catalog from 'pages/Catalog';
import Home from 'pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/" exact>
            <Home></Home>
        </Route>
        <Route path="/catalog">
            <Catalog />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
