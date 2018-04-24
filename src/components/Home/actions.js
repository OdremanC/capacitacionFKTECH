// API
import testApi from './api'; 


const SAVE_DATA = 'SAVE_DATA';
const GET_DATA = 'GET_DATA';


export function addDataToSave(data){
  return {
    type: SAVE_DATA,
    payload: testApi.addData(data)
  }
}

export function getData(){
  return {
    type: GET_DATA,
    payload: testApi.getData()
  }
}
