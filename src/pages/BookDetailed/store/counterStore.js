
import * as counterTypes from './counterTypes';

const defaultState = {
    bookDetailed:{}, //详情
    loading:false,
    platform:[],//正版盗版平台
    mixAtoc:[] //小说章节
}

// 详情
const getBookDetailed = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState.bookDetailed = action.data;
    return newState
}

// 正版盗版
const initplatform = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState.platform = action.data;
    return newState
}

export default (state = defaultState, action) => {
    switch(action.type) {
    case counterTypes.INIT_DETAILE:
        return getBookDetailed(state, action)
    case counterTypes.DETAILED_LOADING:
        const newState = JSON.parse(JSON.stringify(state));
        newState.loading = action.data;
        return newState
    case counterTypes.INIT_PLATFORM:
        return initplatform(state, action) //小说正版盗版平台
    default:
        return state;
	}
}
