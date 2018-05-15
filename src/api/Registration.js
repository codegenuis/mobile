import {url} from './constants';
import {newUserBegin,newUserSuccess} from '../screens/Register/actions';
export function createUser(postData){ 
  return dispatch => {
    dispatch(newUserBegin());
    fetch({url},{
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
      .then((response) => dispatch(newUserSuccess(response.user))) 
      .then((user) => alert("Details Submitted, Kindly check your mail for OTP"))
      .catch(err => console.log(err));
  };
}