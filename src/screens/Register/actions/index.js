import {NEW_USER_BEGIN, NEW_USER} from "../constants";


export const newUserBegin = () => ({
  type: NEW_USER_BEGIN
})

export const newUserSuccess = (user) => ({
  type: NEW_USER,
  payload: {user}
})