import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Toaster } from 'react-hot-toast';
import Single from "./pages/single/Single";
import Fal from "./pages/fal/fal";
import Admin from "./admin/admin";
import Quote from "./pages/quote/Quote";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Fallarım from "./pages/fallarım/fallarım";

function App() {
  return (
    <Router>
      <div>

        <Topbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/posts">
            <Homepage />
          </Route>
          <Route path="/register">   <Toaster />

            <Register />
             
          </Route>
          <Route path="/fallarım"> <Fallarım/><Toaster /></Route>
          <Route path="/Quote"> <Quote/><Toaster /></Route>
          <Route path="/fal"><Fal/><Toaster /></Route>
          <Route path="/admin"><Admin/><Toaster /></Route>
          <Route path="/login"> <Toaster /><Login /></Route>
          <Route path="/post/:id">
            <Single />
          </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;