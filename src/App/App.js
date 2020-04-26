import React from "react";
import "./app.scss";
import "../fonts/fonts.scss";
import Quiz from "../Compononts/Quiz/Quiz";
import Routes from "../Routes";
import QuizList from "../Compononts/QuizList/QuizList";
import CreateQuiz from "../Compononts/CreateQuiz/CreateQuiz";


class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="wrapper">
                {/* <Quiz /> */}    
                {/* <QuizList  /> */}
                <CreateQuiz />
                <Routes />
            </div>
        );
    }
}

export default App;
