import {NEXT_QUESTION,END_QUIZ,TRY_AGAIN,ADD_QUESTION_TO_QUIZ,ADD_NEW_QUIZ,ADD_QUIZ_NAME,QUIZ_LIST_TOGGLE} from "../Action/actionTypes";

const initialState={
    quizes: [],
    quiz:[],
    quizName: "",
    activeQuestion: 0,
    result: [],
    endQuiz: false,
    showQuizList: false
}

export default function Quiz(state=initialState, action){
    switch(action.type){
        // ADD NAME FUNCTIONAL
            case ADD_QUIZ_NAME:
                return{
                    ...state, quizName: action.valueQuizName,
                }
        // CHOSE ANSWER AND GO TO NEXT QUESTION
            case NEXT_QUESTION:
                return{
                    ...state, result: [...state.result, action.result], activeQuestion: state.activeQuestion + 1
                }
            case END_QUIZ:
                return{
                    ...state, endQuiz: true
                }
        // TRY AGAIN QUIZ
            case TRY_AGAIN:
                return{
                    ...state, endQuiz: false, activeQuestion: 0, result: []
                }
        // ADD QUESTION FUNCTIONAL
            case ADD_QUESTION_TO_QUIZ:
                return{
                    ...state, quiz: action.quiz
                }
        //ADD QUIZ FUNCTIONAL
            case ADD_NEW_QUIZ:
                return{
                    ...state, quizes: [...state.quizes, action.doneQuiz], quiz: []
                }
        //TOGGLE QUIZ LIST
            case QUIZ_LIST_TOGGLE:
                return{
                    ...state, showQuizList: !state.showQuizList
                }
        default:
            return state
    }
}