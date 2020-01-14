
import * as counterTypes from './counterTypes';

const defaultState = {
    loading:false,
    ranking:[] //排行榜列表
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case counterTypes.INIT_SAIDRANKING:
            const newState = JSON.parse(JSON.stringify(state));
                newState.ranking = action.data 
            return newState
        case counterTypes.RANKING_LOADIN:
            const loadingState = JSON.parse(JSON.stringify(state));
                loadingState.loading = action.data 
            return loadingState
    default:
        return state;
	}
}
