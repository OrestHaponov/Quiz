import React from "react";
import {Link} from "react-router-dom";

class AddQuiz extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Link to="/createdQuiz">
                <input type="button" value="Add Quiz" 
                    onClick={()=>this.props.addQuiz(
                        this.props.quiz,
                        this.props.quizName
                    )}
                />
            </Link>
        );
    }
}

export default AddQuiz;
