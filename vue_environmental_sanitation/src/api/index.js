import {get,post} from './http'

/****************车辆相关********************/


export const getAllVehicle =() => get(`Vehicle/allVehicle`);

export const setVehicle = (params) => post(`Vehicle/add`,params);

export const delVehicle = (id) => get(`Vehicle/delete?id=${id}`);