import React from "react";
import "./HomePage.scss";

class HomePage extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="homepage">
                <div className="wrapper">
                    <h2>Here you can try yourself in different quizzes)</h2>
                    <h3>Also you can create quiz by your self.<br></br>Enjoy</h3>
                </div>
            </div>
        );
    }
}

export default HomePage;
