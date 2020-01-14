import axios from 'axios';
import * as counterTypes from './counterTypes';
import util from '../../../utils/util';

const initcollection = (data) => ({
    type:counterTypes.INIT_COLLECTION,
    data
})

const collectionItem = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`/api/book/${id}`)
        .then(function (res) {
            const data = {
                _id:res.data._id,
                updated:util.getTimeShow(res.data.updated),
                title:res.data.title,
                lastChapter:res.data.lastChapter,
                cover:`${util.staticPath}${res.data.cover}`
            }
            resolve(data)

        })
        .catch(function (error) {

        });
    })
}

export const getCollection = (list = []) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            var collection = [];
            for( let i=0; i<list.length; i++){
                collectionItem(list[i]).then( res => {
                    collection.unshift(res)
                    if( i === list.length -1 ){
                        dispatch(initcollection(collection))
                        resolve(collection)
                    }
                })
            }  
        })
    }
}

