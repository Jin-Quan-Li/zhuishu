
import * as counterTypes from './counterTypes';

const defaultState = {
    collectionList:[]
}


export default (state = defaultState, action) => {
    switch(action.type) {
    case counterTypes.INIT_COLLECTION:
        const newState = JSON.parse(JSON.stringify(state));
        newState.collectionList = action.data;
        return newState
    default:
        return state;
	}
}
