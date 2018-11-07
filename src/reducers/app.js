const initialState = {
    copyRight: 'CopyRight 2018',
    pageTitle: 'Lapak Buku'
}

const appReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_COPYRIGHT':
            return {
                ...state,
                copyRight: action.payload.newCopyRight,
            }

            default:
                return state
    }
}

export default appReducer