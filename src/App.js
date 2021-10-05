import './App.css';
import './assets/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FunctionalComponent from './components/Functional';
import ClassComponent from './components/Class';
import SplitLayout from './components/UI/SplitLayout';

function App() {
  return (
    <div className="App">
       <Router>
          <Switch>
            {/* Full Page Wrapper HOC */}
            <Route path="/" exact>
              <SplitLayout left={<FunctionalComponent/>} right={<ClassComponent/>}/>
            </Route>
            {/* Access Login Container */}
            <Route path="/functional">
              <FunctionalComponent/>
            </Route>
            {/* Access Contact Container */}
            <Route path="/class">
              <ClassComponent/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
