import React from "react";
import "./styles.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Contact from "./Contact";
import Homepage from "./homepage";
import Signup from "./SignUP";
import ShopList from "./shopList";
import Items from "./components/item";
import Validate from "./components/Validate";

function App() {
  return (
    // <Router>
    //   <Route path="/" exact component={Homepage} />
    //   <Route path="/Contact" component={Contact} />
    //   <Route path="/Signup" component={Signup} />
    //   <Route path="/shopList" component={ShopList} />
    //   <Route path="/Item" component={Items} />
    // </Router>
    <Validate />
  );
}
export default App;
