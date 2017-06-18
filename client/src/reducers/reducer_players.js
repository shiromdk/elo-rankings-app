import { FETCH_PLAYERS } from '../actions/index';
const INITIAL_STATE = {players:[]};

export default function(state=INITIAL_STATE,action){
  switch(action.type){
    case FETCH_PLAYERS:
    //creates new state. does not mutate existing state
      return {...state,players:action.payload.data};
    default:
      return state;
  }
}
