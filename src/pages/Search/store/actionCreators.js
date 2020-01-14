import axios from 'axios';
import * as counterTypes from './counterTypes';

export const unmount = () => ({
    type:counterTypes.UNMOUNT_LIST
})


const initsearch = (data) => ({
    type:counterTypes.INIT_SEARCH,
    data
})

export const getSearch = (query) => {
    return (dispatch) => {
        axios.get('/api/book/fuzzy-search',{
            params: {
                query
            }
        })
        .then(function (res) {
            dispatch(initsearch(res.data.books))
        })
        .catch(function (error) {

        });
    }
}