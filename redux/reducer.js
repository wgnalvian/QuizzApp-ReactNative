let init = {
    score  : 0
}

export const reducer = (state = init, action) => {
    switch(action.type){
        case 'ADD_SCORE' : return {
            score : state.score + 1
        }
        case 'RESET_SCORE' : return {
            score : 0
        }
        default : return state
    }
}