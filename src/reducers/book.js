const initialState = {
    bookData: [],
}

const bookReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_BOOKS' :
            return {
                ...state,
                bookData: action.payload.books
            }
        default : 
            return state
    } 
}

export default bookReducer