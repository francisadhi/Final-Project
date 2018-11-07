import axios from 'axios'

export const fetchFilms = () => {
    let config = {
        headers: {'x-api-key': 'ocs0w4k08gsw40occgg8cc8080o848ggoo4w4csw'}
      };
    return (dispatch) => {
        axios.get('https://api.itbook.store/1.0/books')
            .then(respone => {
                dispatch({
                    type : 'ADD_FILMS',
                    payload : {
                        films: respone.data.books
                    }
                })
            })
    }
}