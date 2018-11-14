import axios from 'axios'
import React from 'react'

// export const fetchbooks = () => {
//     return (dispatch) => {
//         axios.get('https://www.googleapis.com/books/v1/volumes?q=reactjs')
//             .then(response => {
//                 // console.log(response.data.items)
//                 dispatch({
//                     type : 'ADD_BOOKS',
//                     payload : {
//                         books: response.data.items
//                     }
//                 })
//             })

//     }
// }

export const fetchbibles = () => {
    return (dispatch) => { 
        axios.get('https://api.scripture.api.bible/v1/bibles', { headers: { 'api-key': 'a646f4c12d612ad78f561a37530ea750' } })
        .then(response => {
            console.log(response.data.data)
            dispatch({
                type : 'ADD_BIBLES',
                payload : {
                    bibles: response.data.data
                }
            })
        })
    }
}

// export const fetchbook = () => {
//     return (dispatch) => {
//         axios.get(`https://www.googleapis.com/books/v1/volumes/${match.params.id}/`)       
//             .then(response => {
//                 dispatch({
//                     type : 'BOOK_DETAIL',
//                     payload : {
//                         book: response.data.bookDetail
//                     }
//                 })
//             })
//     }
// }