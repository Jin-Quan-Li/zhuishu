
import * as counterTypes from './counterTypes';

const defaultState = {
    mixAtoc:[], //小说章节
    content:{},
    loading:false,
    index:0
}

// 章节
const initMixatoc = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState.mixAtoc = action.data;
    return newState
}

// 小说内容
const initContent = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState.content = action.data;
    return newState
}

const getContentLoading = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState.loading = action.data;
    return newState
}

export default (state = defaultState, action) => {
    switch(action.type) {
    case counterTypes.INIT_MIXTOC:
        return initMixatoc(state, action) //小说章节
    case counterTypes.INIT_CONTENT:
        return initContent(state, action) //小说内容
    case counterTypes.CONTEN_LOADING:
        return getContentLoading(state, action)
    case counterTypes.BOOK_INDEX:
        const newState = JSON.parse(JSON.stringify(state));
        newState.index = action.isNext ? action.data + 1 : action.data - 1;
        return newState
    default:
        return state;
	}
}