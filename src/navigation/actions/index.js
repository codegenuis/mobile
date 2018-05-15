import {NavigationActions} from "react-navigation";
import * as screenNames from "../Screen-names";

export const navigateBack = () => NavigationActions.back();

export const navigateToRegister = () =>
  NavigationActions.navigate({
    routeName: screenNames.Register
  });

export const navigateToVerification = () =>
  NavigationActions.navigate({
    routeName: screenNames.Verification
  });
