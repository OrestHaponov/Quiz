import React from "react";
import {Link} from "react-router-dom";

class QuizListNames extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.showQuizList === false ?
                    <ul className="quizList__names">
                        {this.props.quizes.map((value,index)=>{
                            return(
                                <React.Fragment key={index}>
                                    {Object.keys(value).map(quiz =>{
                                        return(
                                            <Link key={index} to={{
                                                pathname: quiz,
                                                state: {
                                                    quizQuestions: value[quiz]
                                                }
                                            }}
                                            onClick={this.props.quizListToggle}
                                            >
                                                <li>{quiz}</li>
                                            </Link>
                                        )
                                    })}
                                </React.Fragment >
                            )
                        })}
                    </ul>
                : null}
            </React.Fragment>
        );
    }
}


export default QuizListNames;
