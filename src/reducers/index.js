import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import registerReducer from "../screens/Register/reducers";
import navigationData from "../navigation/reducers";

const rootReducer = combineReducers ({
    form: formReducer,
    user: registerReducer,
    navigation: navigationData
})

export default rootReducer