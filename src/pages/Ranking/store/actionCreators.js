import axios from 'axios';
import * as counterTypes from './counterTypes';
import util from '../../../utils/util';

const ranking = (data) => ({
    type:counterTypes.INIT_RANKING,
    data
})

export const getRanking = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios.get('/api/ranking/gender')
            .then(function (res) {
                const data = res.data;
                const list = [];
                list.push({
                    title:'男生',
                    type:'male',
                    list:data.male && data.male.map((item,index) => {
                        item.cover = `${util.staticPath}${item.cover}`
                        return item
                    })
                })
                list.push({
                    title:'女生',
                    type:'female',
                    list:data.female && data.female.map((item,index) => {
                        item.cover = `${util.staticPath}${item.cover}`
                        return item
                    })
                })
                list.push({
                    title:'漫画',
                    type:'picture',
                    list:data.picture && data.picture.map((item,index) => {
                        item.cover = `${util.staticPath}${item.cover}`
                        return item
                    })
                })
                list.push({
                    title:'热搜',
                    type:'press',
                    list:data.epub && data.epub.map((item,index) => {
                        item.cover = `${util.staticPath}${item.cover}`
                        return item
                    })
                })
                dispatch(ranking(list))
                resolve(res)
            })
            .catch(function (error) {

            });      
        })
    }
}
