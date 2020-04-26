import {NEXT_QUESTION,END_QUIZ,RETURN_TO_QUIZ,ADD_QUESTION_TO_QUIZ,ADD_NEW_QUIZ,ADD_QUIZ_NAME} from "../Action/actionTypes";

const initialState={
    quizes: [],
    quiz:[],
    activeQuestion: 0,
    result: [],
    endQuiz: false,
}

export default function Quiz(state=initialState, action){
    switch(action.type){
        case NEXT_QUESTION:
            return{
                ...state, result: [...state.result, action.result], activeQuestion: state.activeQuestion + 1
            }
        case END_QUIZ:
            return{
                ...state, endQuiz: true
            }
        case RETURN_TO_QUIZ:
            return{
                ...state, endQuiz: false, activeQuestion: 0, result: []
            }
        case ADD_QUESTION_TO_QUIZ:
            return{
                ...state, quiz: action.quiz
            }
        case ADD_NEW_QUIZ:
            return{
                ...state, quizes: [...state.quizes, action.doneQuiz], quiz: []
            }
        case ADD_QUIZ_NAME:
            return{
                ...state, quiz: [...state.quiz, action.quizName],
            }
        default:
            return state
    }
}