import React from "react";

class QuizResults extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="quiz__result">
                {this.props.result.map((value,index)=>{
                    return(
                        <ul key={index}>
                            <li>
                                <h3>{value.question}</h3>
                                <span className={value.answer == "Wrong" ? "quiz__result-wrong" : "quiz__result-right"}>
                                    {value.answer}
                                </span>
                            </li>
                        </ul>
                    )
                })}
                <button onClick={this.props.tryAgain}>Try again</button>
            </div>
        );
    }
}


export default QuizResults;
