import axios from 'axios';
import * as counterTypes from './counterTypes';

const initList = (data) => ({
    type:counterTypes.INIT_LIST,
    data
})

const loading = () => ({
    type:counterTypes.IS_LOADING
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/cats/lv2/statistics')
        .then(function (res) {
            const data = res.data;
            const list = [];
            list.push({
                title:'男生',
                type:'male',
                list:data.male
            })
            list.push({
                title:'女生',
                type:'female',
                list:data.female
            })
            list.push({
                title:'漫画',
                type:'picture',
                list:data.picture
            })
            list.push({
                title:'出版',
                type:'press',
                list:data.press
            })
            dispatch(initList(list))
            dispatch(loading())
        })
        .catch(function (error) {
            dispatch(loading())
        });
    }
}
