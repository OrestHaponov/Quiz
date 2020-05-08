import React from "react";
import {Link} from "react-router-dom";
import "./Header.scss";
import QuizList from "../QuizList/QuizList";

class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="header">
                <div className="header__links">
                    <Link to="/">
                        Home
                    </Link>
                </div>
                <div className="header__links">
                    <Link to="createQuiz">
                        Create quiz
                    </Link>
                </div>
                <div className="header__links">
                    <QuizList />
                </div>
            </div>
        );
    }
}

export default Header;
