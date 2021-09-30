import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NoMatch from "./components/NoMatch";
import ControlPanel from "./components/ControlPanel";
import "./styles/styles";

const App: React.FunctionComponent = (props) => {
    return (
        <Router>
            <div className="relative w-screen h-screen text-blueGray-100 font-engineer select-none">
                <Switch>
                    <Route exact path ="/" component={ControlPanel} />
                    <Route exact path ="*/Terminal" component={ControlPanel} />
                    <Route exact path ="*/Terminal.html" component={ControlPanel} />
                    <Route exact path ="*Terminal.html" component={ControlPanel} />
                    <Route path="/*" component={NoMatch} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;