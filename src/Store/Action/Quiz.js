import {NEXT_QUESTION,END_QUIZ,TRY_AGAIN,QUIZ_LIST_TOGGLE} from "./actionTypes";
 
// CHOSE ANSWER AND GO TO NEXT QUESTION

    export function chooseAnswer(answerId,rightAnswer,question,quizLength,activeQuestion){
        return(dispatch) =>{
            let result = {};
            if(quizLength === activeQuestion){
                if(answerId == rightAnswer){
                    result["answer"] = "Right";
                }else{
                    result["answer"] = "Wrong";
                }
                result["question"] = question;
                dispatch(nextQuestion(result));
                dispatch(endQuiz());
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

// TRY AGAIN QUIZ

    export function tryAgain(){
        return{
            type: TRY_AGAIN
        }
    }

// TOGGLE QUIZ LIST

    export function quizListToggle(){
        return{
            type: QUIZ_LIST_TOGGLE
        }
    }


