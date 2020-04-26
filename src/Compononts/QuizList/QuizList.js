import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {add} from "../../Store/Action/Quiz";
class Quiz extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="quiz">
                <button onClick={()=>this.props.add(this.props.quizes,this.props.quiz)}>Push</button>
                {this.props.quizes.map((value,index)=>{
                    return(
                        <Link to={value.name} key={index}>
                            <div className="users">
                                <h3>{value.name}</h3>
                            </div>
                        </Link>
                    )
                })}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        quizList: state.Quiz.quizList,
        quiz: state.Quiz.quiz,
        quizes: state.Quiz.quizes,
    }
}

function mapDispatchToProps(dispatch){
    return{
        add: (quizes,quiz)=>dispatch(add(quizes,quiz)),
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (Quiz);
