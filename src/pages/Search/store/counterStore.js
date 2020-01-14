
import * as counterTypes from './counterTypes';

const defaultState = {
    list:[]
}

export default (state = defaultState, action) => {
    switch(action.type) {
		case counterTypes.INIT_SEARCH:
            const newState = JSON.parse(JSON.stringify(state));
            newState.list = action.data;
            return newState
        case counterTypes.UNMOUNT_LIST:
            const unmountState = JSON.parse(JSON.stringify(state));
            unmountState.list = [];
            return unmountState
		default:
			return state;
	}
}