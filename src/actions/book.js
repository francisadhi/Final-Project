import axios from 'axios'
import React from 'react'

export const fetchbooks = () => {
    return (dispatch) => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=reactjs')
            .then(response => {
                // console.log(response.data.items)
                dispatch({
                    type : 'ADD_BOOKS',
                    payload : {
                        books: response.data.items
                    }
                })
            })

    }
}

export const fecthbookpictures = () => {
    let pictures
    return (dispatch) => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=reactjs')
            // .then( items => {
            //     return items.json();
            // })
            .then(response => {
                pictures = response.data.items.map((pic) => {
                    return(
                        <div key={pic.items}>
                            {pic.saleInfo.retailPrice}
                        </div>
                    )
                })
                dispatch({
                    type : 'ADD_PICTURES',
                    payload : {
                        pictures: pictures
                    }
                })
                console.log(pictures)

                // let saleInfos = pictures.map((am)=>{
                //     return(
                //         <div key={pictures}></div>
                //     )
                // })
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