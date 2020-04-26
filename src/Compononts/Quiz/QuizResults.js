import React from "react";

class QuizResults extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="result">
                <button onClick={this.props.returnToQuiz}>Return</button>
                {this.props.result.map((value,index)=>{
                    return(
                        <div className="result" key={index}>
                            <h1>{value.question}</h1>
                            <h2>{value.answer}</h2>
                        </div>
                    )
                })}
            </div>
        );
    }
}


export default QuizResults;
