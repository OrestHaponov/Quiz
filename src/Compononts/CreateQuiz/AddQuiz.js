import React from "react";

class AddQuiz extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <input type="button" value="Add Quiz" onClick={()=>this.props.addQuiz(this.props.quiz)}/>
        );
    }
}

export default AddQuiz;
