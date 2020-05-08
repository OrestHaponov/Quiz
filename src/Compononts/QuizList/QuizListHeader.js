import React from "react";

class QuizListHeader extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <h3 onClick={this.props.quizListToggle}>Quiz list</h3>
        );
    }
}

export default QuizListHeader;
