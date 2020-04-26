import {NEXT_QUESTION,END_QUIZ,RETURN_TO_QUIZ} from "./actionTypes";
 
export function chooseAnswer(answerId,rightAnswer,question,quizLength,activeQuestion){
    return(dispatch) =>{
        let result = {};
        if(quizLength === activeQuestion){
            dispatch(endQuiz())
            }else{
                if(answerId == rightAnswer){
                    result["answer"] = "Right";
                }else{
                    result["answer"] = "Wrong";
                }
            result["question"] = question
            dispatch(nextQuestion(result));
        }
    }
}

export function nextQuestion(result){
    return{
        type: NEXT_QUESTION,
        result
    }
}

export function endQuiz(){
    return{
        type: END_QUIZ        
    }
}

export function returnToQuiz(){
    return{
        type: RETURN_TO_QUIZ
    }
}


