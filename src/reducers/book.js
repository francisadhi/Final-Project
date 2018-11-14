const initialState = {
    bookData: [],
    pictureData: [],
    bookDetail: [],
    bibles: [],
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
        case 'ADD_BIBLES':
            return {
                ...state,
                bibles: action.payload.bibles
            }
        default : 
            return state
    } 
}

export default bookReducer