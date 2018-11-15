const initialState = {
    bookData: [],
    pictureData: [],
    bibleDetail: [],
    bibles: [],
    books: [],
    chapters: [],
    verses: [],
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
        case 'BOOK_LIST':
        return {
            ...state,
            books: action.payload.books
            }
        case 'CHAPTER_LIST':
        return {
            ...state,
            chapters: action.payload.chapters
            }
        case 'VERSES_LIST':
        return {
            ...state,
            verses: action.payload.verses
            }
        default : 
            return state
    } 
}

export default bookReducer