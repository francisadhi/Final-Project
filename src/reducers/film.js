const initialState = {
    filmData: [],
}

const filmReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_FILMS' :
            return {
                ...state,
                filmData: action.payload.films
            }
        default : 
            return state
    } 
}

export default filmReducer