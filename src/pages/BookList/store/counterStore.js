
import * as counterTypes from './counterTypes';
import util from '../../../utils/util';

const defaultState = {
    cats:{}, // 类别
    books:[], //列表
    total:0,//总条数
    loading:false
}

// 类别
const getCatsLv = (state,action) => {
    const newState = JSON.parse(JSON.stringify(state));
    const data = action.data;
    delete data.ok
    newState.cats = data;
    return newState
}

// 列表
const getBookList = (state,action) => {
    const newState = JSON.parse(JSON.stringify(state));
    const data = action.data;
    const books = data.books.map((item,index) => {
        item.cover = `${util.staticPath}${item.cover}`
        return item
    })
    newState.books = books;
    newState.total = data.total;
    return newState
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case counterTypes.CATS_LV:
            return getCatsLv(state,action)
        case counterTypes.INIT_BOOK_LIST:
            return getBookList(state,action)
        case counterTypes.LOADING:
            const newState = JSON.parse(JSON.stringify(state));
            newState.loading = action.data;
            return newState
		default:
			return state;
	}
}
