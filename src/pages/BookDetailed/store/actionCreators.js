import axios from 'axios';
import * as counterTypes from './counterTypes';
import util from '../../../utils/util';

const initDetaile = (data) => ({
    type:counterTypes.INIT_DETAILE,
    data
})

const detaileLoading = (data) => ({
    type:counterTypes.DETAILED_LOADING,
    data
})

const initPlatform = (data) => ({
    type:counterTypes.INIT_PLATFORM,
    data
})

// 详情
export const getDetaile = (id) => {
    return (dispatch) => {
        dispatch(detaileLoading(false))
        axios.get(`/api/book/${id}`)
        .then(function (res) {
            const data = {
                ...res.data,
                cover:`${util.staticPath}${res.data.cover}`,
                updated:util.getTimeShow(res.data.updated),
                wordCount:util.formatMoney(res.data.wordCount)
            }
            dispatch(initDetaile(data))
            dispatch(detaileLoading(true))
        })
        .catch(function (error) {
            dispatch(detaileLoading(true))
            console.log(error);
        });
    }
}

// 获取小说正版源于盗版源(混合)
export const getPlatform = (book) => {
    return (dispatch) => {
        axios.get(`/api/atoc`, {
            params: {
                view:'summary',
                book
            }
        })
        .then(function (res) {
            const data = res.data;
            dispatch(initPlatform(data))
        })
        .catch(function (error) {
            alert("服务器错误!")
        });
    }
}
