const initialState = {
    bookData: [],
    pictureData: [],
    bookDetail: [],
}

const bookReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_BOOKS' :
            return {
                ...state,
                bookData: action.payload.books
            }
        case 'ADD_PICTURES':
            return {
                ...state,
                pictureData: action.payload.pictures
            }
        case 'BOOK_DETAIL':
            return {
                ...state,
                bookDetail: action.payload.book
            }
        default : 
            return state
    } 
}

export default bookReducer