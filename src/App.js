import React from "react"
import Main from "./Main";
import About from './About';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import User from "./User";


class App extends React.Component{
    render(){
        return(   
          <BrowserRouter>
           <Switch>
           <Route exact path="/" component={Main}></Route>
           <Route exact path="/user" component={User}></Route>
           <Route exact path="/user:id" component={User}></Route>
          {/* <Route exact path="/" component={Home}></Route>
          <Route exact path="/main" component={Main}></Route>
          <Route path="/main/about" component={About}></Route> */}
          </Switch>
          </BrowserRouter>
        )
    }
}
{/* <Main  /> */}
export default App;

