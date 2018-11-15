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

export const fetchbiblebooks = (bibleid) => {
    return (dispatch) => {        
        
        axios.get(`https://api.scripture.api.bible/v1/bibles/${bibleid}/books`,{ headers: { 'api-key': '6203c1c09761df55ea32eac2b4f2b09f' } })      
            .then(response => {
                dispatch({
                    type : 'BOOK_LIST',
                    payload : {
                        books: response.data.data
                    }
                })
            })
    }
}

export const fetchbiblechapters = (bibleId, id) => {
    return (dispatch) => {        
        
        axios.get(`https://api.scripture.api.bible/v1/bibles/${bibleId}/books/${id}/chapters`,{ headers: { 'api-key': '6203c1c09761df55ea32eac2b4f2b09f' } })      
            .then(response => {
                dispatch({
                    type : 'CHAPTER_LIST',
                    payload : {
                        chapters: response.data.data
                    }
                })
            })
    }
}

export const fetchbibleverses = (bibleId, id) => {
    return (dispatch) => {        
        
        axios.get(`https://api.scripture.api.bible/v1/bibles/${bibleId}/chapters/${id}/verses`,{ headers: { 'api-key': '6203c1c09761df55ea32eac2b4f2b09f' } })      
            .then(response => {
                dispatch({
                    type : 'VERSES_LIST',
                    payload : {
                        verses: response.data.data
                    }
                })
            })
    }
}

export const changePageTitle = (newPageTitle) => {
    return {
      type: 'PAGE_TITLE_CHANGE',
      payload: {
        newPageTitle: newPageTitle
      }
    }
  }