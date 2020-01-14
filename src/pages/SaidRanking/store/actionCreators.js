import axios from 'axios';
import * as counterTypes from './counterTypes';
import util from '../../../utils/util';

const saidRanking = (data) => ({
    type:counterTypes.INIT_SAIDRANKING,
    data
})

const rankingLoadin = (data) => ({
    type:counterTypes.RANKING_LOADIN,
    data
})

export const getRanking = (id) => {
    return (dispatch) => {
        dispatch(rankingLoadin(false))
        return new Promise((resolve, reject) => {
            axios.get(`/api/ranking/${id}`,{
                params: {
                    _id:"54d42e72d9de23382e6877fb"
                  }
            })
            .then(function (res) {
                const ranking = {
                    ...res.data.ranking,
                    books:res.data.ranking.books.map((item,index) => {
                        item.cover = `${util.staticPath}${item.cover}`
                        return item
                    })
                }
                dispatch(saidRanking(ranking))
                dispatch(rankingLoadin(true))
                resolve(res)
            })
            .catch(function (error) {
                dispatch(rankingLoadin(true))
                alert('服务器错误~~')
            });      
        })
    }
}
