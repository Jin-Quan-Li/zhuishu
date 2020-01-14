import axios from 'axios';
import * as counterTypes from './counterTypes';

const getMixtoc = (data) => ({
    type:counterTypes.INIT_MIXTOC,
    data
})

const initContent = (data) => ({
    type:counterTypes.INIT_CONTENT,
    data
})

const contentLoading = (data) => ({
    type:counterTypes.CONTEN_LOADING,
    data
})

export const getIndex = (data,isNext) => ({
    type:counterTypes.BOOK_INDEX,
    data,
    isNext
})

// 章节
export const getMixAtoc = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios.get(`/api/atoc/${id}`, {
                params: {
                    view:'chapters'
                }
            })
            .then(function (res) {
                const data = res.data.chapters;
                dispatch(getMixtoc(data))
                resolve(data)
            })
            .catch(function (error) {
                alert("服务器错误!")
            });
        })
    } 
}

// 章节内容
export const getContent = (link) => {
    return (dispatch) => {
        dispatch(contentLoading(false))
        return new Promise((resolve, reject) => {
            axios.get(`/apc/chapter/${link}`)
            .then(function (res) {
                const chapter = {
                    ...res.data.chapter,
                    contentList:res.data.chapter.cpContent ? res.data.chapter.cpContent.split('\n').map((item,index) => {
                        item = item.replace(/　　/g,'')
                        return item
                    }) : []
                }
                dispatch(initContent(chapter))
                dispatch(contentLoading(true))
                resolve(res)
            })
            .catch(function (error) {
                dispatch(contentLoading(true))
                alert("服务器错误!")
            });
        })
    } 
}
