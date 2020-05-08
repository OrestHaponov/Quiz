import React from "react";
import "./app.scss";
import "../fonts/fonts.scss";
import Routes from "../Routes";
import Header from "../Compononts/Header/Header";
import HomePage from "../Compononts/HomePage/HomePage";

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="wrapper">
                <Header /> 
                <Routes />
            </div>
        );
    }
}

export default App;
