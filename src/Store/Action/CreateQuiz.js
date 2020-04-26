import {HANDLE_CHANGE_QUESTION,HANDLE_CHANGE_ANSWER_ONE,HANDLE_CHANGE_ANSWER_TWO,HANDLE_CHANGE_ANSWER_THREE,HANDLE_CHANGE_ANSWER_FOUR,HANDLE_CHANGE_SELECT,ADD_QUESTION_TO_QUIZ,HANDLE_CHANGE_QUIZ_NAME,ADD_NEW_QUIZ,ADD_QUIZ_NAME,CLEAR_VALUE_QUIZ_NAME} from "./actionTypes";

//GET CONTROLED ALL INPUTS
export function handleChangeQuestion(valueQuestion){
    return{
        type: HANDLE_CHANGE_QUESTION,
        valueQuestion
    }
}

export function handleChangeAnswerOne(valueAnswerOne){
    return{
        type: HANDLE_CHANGE_ANSWER_ONE,
        valueAnswerOne
    }
}

export function handleChangeAnswerTwo(valueAnswerTwo){
    return{
        type: HANDLE_CHANGE_ANSWER_TWO,
        valueAnswerTwo
    }
}

export function handleChangeAnswerThree(valueAnswerThree){
    return{
        type: HANDLE_CHANGE_ANSWER_THREE,
        valueAnswerThree
    }
}

export function handleChangeAnswerFour(valueAnswerFour){
    return{
        type: HANDLE_CHANGE_ANSWER_FOUR,
        valueAnswerFour
    }
}

export function handleChangeSelect(valueSelect){
    return{
        type: HANDLE_CHANGE_SELECT,
        valueSelect
    }
}

//CREATE QUESTION

export function handleChangeQuizName(valueQuizName){
    return{
        type: HANDLE_CHANGE_QUIZ_NAME,
        valueQuizName
    }
}

export function addQuizName(valueQuizName){
    return(dispatch) =>{
        event.preventDefault();
        let quizName = {};
        quizName["quizName"] = valueQuizName;
        dispatch(addNameOfQuiz(quizName));
        dispatch(clearValueQuizName());
    }
}

export function clearValueQuizName(){
    return{
        type: CLEAR_VALUE_QUIZ_NAME
    }
}

export function addNameOfQuiz(quizName){
    return{
        type: ADD_QUIZ_NAME,
        quizName
    }
}

export function addQuestion(quiz,valueQuestion,valueAnswerOne,valueAnswerTwo,valueAnswerThree,valueAnswerFour,valueSelect){
    return(dispatch) =>{
        let question = {};
        question["question"] = valueQuestion;
        question["answerState"] = "";
        question["rightAnswer"] = parseInt(valueSelect);
        question["answers"] = [
            {answer: valueAnswerOne, id:1},
            {answer: valueAnswerTwo, id:2},
            {answer: valueAnswerThree, id:3},
            {answer: valueAnswerFour, id:4},
        ]
        quiz.push(question);
        dispatch(addQuestionToQuiz(quiz));
    }
}

export function addQuestionToQuiz(quiz){
    return{
        type: ADD_QUESTION_TO_QUIZ,
        quiz
    }
}

export function addQuiz(quiz){
    return(dispatch) =>{
        let doneQuiz = {quiz}
        dispatch(addNewQuiz(doneQuiz))
    }
}

export function addNewQuiz(doneQuiz){
    return{
        type: ADD_NEW_QUIZ,
        doneQuiz
    }
}

