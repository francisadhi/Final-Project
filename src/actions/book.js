import axios from 'axios'
import React from 'react'

export const fetchbibles = () => {
    return (dispatch) => { 
        axios.get('https://api.scripture.api.bible/v1/bibles', { headers: { 'api-key': '6203c1c09761df55ea32eac2b4f2b09f' } })
        .then(response => {
            // console.log(response.data.data)
            dispatch({
                type : 'ADD_BIBLES',
                payload : {
                    bibles: response.data.data
                }
            })
        })
    }
}

export const fetchbible = () => {
    // let token = {
    //     type : 'ADD_TOKEN',
    //     payload : {
    //         token: response.data.bookDetail
    //     }
    // }
    return (dispatch) => {        
        
        axios.get(`https://api.scripture.api.bible/v1/bibles/2dd568eeff29fb3c-01`,{ headers: { 'api-key': '6203c1c09761df55ea32eac2b4f2b09f' } })      
            .then(response => {
                dispatch({
                    type : 'BIBLE_DETAIL',
                    payload : {
                        book: response.data.bookDetail
                    }
                })
            })
    }
}