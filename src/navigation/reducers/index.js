import AppNavigator from "../navigators";
import {Register} from "../Screen-names";

let initialState = {
  index: 0,
  routes: [
    {
      key: "Register",
      routeName: Register
    }
  ]
};

const navigationData = (state, action) => {
  const nextState = AppNavigator.router.getStateForAction(
    action,
    state
  );

  return nextState || state;
};

export default navigationData;