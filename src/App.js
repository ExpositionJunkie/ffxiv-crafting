import "./App.css";
import Home from "./Components/Pages/Home/Home";
import Character from "./Components/Pages/Character/Character";
import Navbar from "./Components/Reusable/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {


  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/character" exact component={Character} />
      </Switch>
    </Router>
  </>
  );
}

export default App;
