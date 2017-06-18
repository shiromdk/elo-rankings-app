import axios from 'axios';

export const FETCH_PLAYER = 'FETCH_PLAYER';
export const FETCH_PLAYERS = 'FETCH_PLAYERS';
export const CREATE_PLAYER = 'CREATE_PLAYER';



export function fetchPlayers(){
  const url = '/management/player';
  const request = axios.get(url);

  return {
    type: FETCH_PLAYERS,
    payload:request
  };
}
