import React from "react";
import {StackNavigator} from "react-navigation";
import RegisterScreen  from "../Screen-names";
import VerificationScreen  from "../Screen-names";
import Register from "../../screens/Register/containers";
import Verification from "../../screens/Register/containers/verification";

 const AppNavigator = StackNavigator({
 Register: {
    screen: Register
  },

  Verification: {
    screen: Verification
  }
});

export default AppNavigator

