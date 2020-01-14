
import * as counterTypes from './counterTypes';

const defaultState = {
    list:[] //排行榜列表
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case counterTypes.INIT_RANKING:
            const newState = JSON.parse(JSON.stringify(state));
                newState.list = action.data 
            return newState
    default:
        return state;
	}
}
