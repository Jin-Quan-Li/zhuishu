
import * as counterTypes from './counterTypes';

const defaultState = {
    list:[],
    loading:false
}

const initLoading = (state,action) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState.loading = true;
    return newState
}

export default (state = defaultState, action) => {
    switch(action.type) {
		case counterTypes.INIT_LIST:
            const newState = JSON.parse(JSON.stringify(state));
                newState.list = action.data;
            return newState
        case counterTypes.IS_LOADING:
            return initLoading(state,action)
		default:
			return state;
	}
}
