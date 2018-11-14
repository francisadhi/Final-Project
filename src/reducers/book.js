const initialState = {
    bookData: [],
    pictureData: [],
    bibleDetail: [],
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
        case 'BIBLE_DETAIL':
            return {
                ...state,
                bibleDetail: action.payload.biblekDetail
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