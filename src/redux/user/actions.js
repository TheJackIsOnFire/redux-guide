import UserActionsTypes from "./action-types";

export const loginUser = (payload) => ({
  type: UserActionsTypes.LOGIN,
  payload,
});

export const logoutUser = () => ({
  type: UserActionsTypes.LOGOUT,
});
