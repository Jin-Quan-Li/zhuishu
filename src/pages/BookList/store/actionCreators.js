import axios from 'axios';
import * as counterTypes from './counterTypes';

const getCats = (data) => ({
    type:counterTypes.CATS_LV,
    data
})

const getInitBookList = (data) => ({
    type:counterTypes.INIT_BOOK_LIST,
    data
})

export const loading = (data) => ({
    type:counterTypes.LOADING,
    data
})

export const getCatsList = () => {
    return (dispatch) => {
        axios.get('/api/cats/lv2')
        .then(function (res) {
            dispatch(getCats(res.data));
        })
        .catch(function (error) {
            
        });
    }
}

export const getBooklist = (data) => {
    return (dispatch) => {
        dispatch(loading(false))
        axios.get('/api/book/by-categories',{
            params: {
                ...data
            }
        })
        .then(function (res) {
            dispatch(getInitBookList(res.data))
            dispatch(loading(true))
        })
        .catch(function (error) {
            dispatch(loading(true))
        });
    }
}
