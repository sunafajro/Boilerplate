/* @flow */

type LoginAction = { type: "LOGIN" };
type LoginSuccessAction = {
  type: "LOGIN_SUCCESS",
  loggedIn: boolean,
  profile: Object,
  contacts: Array<Object>,
  navigation: Array<Object>,
  message: { type?: string, text?: string }
};
type LoginFailedAction = {
  type: "LOGIN",
  message: { type?: string, text?: string }
};

type LogoutAction = { type: "LOGOUT" };
type LogoutSuccessAction = {
  type: "LOGOUT",
  contacts: Array<Object>,
  navigation: Array<Object>,
  message: { type?: string, text?: string }
};
type LogoutFailedAction = {
  type: "LOGOUT",
  message: { type?: string, text?: string }
};

type GetStateAction = { type: "GET_STATE" };

type GetStateSuccessAction = {
  type: "GET_STATE_SUCCESS",
  loggedIn: boolean,
  profile: Object,
  contacts: Array<Object>,
  navigation: Array<Object>,
  message: { type?: string, text?: string },
  labels: Object
};

type GetStateFailedAction = {
  type: "GET_STATE_FAILED",
  message: { type?: string, text?: string }
};

type UpdateStateAction = {
  type: "UPDATE_STATE"
};

type UpdateStateUsernameAction = {
  type: "UPDATE_STATE_USERNAME",
  username: string
};

type UpdateStatePasswordAction = {
    type: "UPDATE_STATE_PASSWORD",
    password: string
  };

type UpdateStateValidAction = {
  type: "UPDATE_STATE_VALID",
  valid: boolean
};

type PromiseAction = Promise<Action>;
type Dispatch = (
  action: Action | ThunkAction | PromiseAction
) => any;

export type Action = 
 | LoginAction
 | LoginSuccessAction
 | LoginFailedAction
 | LogoutAction
 | LogoutSuccessAction
 | LogoutFailedAction
 | GetStateAction
 | GetStateSuccessAction
 | GetStateFailedAction
 | UpdateStateAction
 | UpdateStateUsernameAction
 | UpdateStatePasswordAction
 | UpdateStateValidAction;
export type ThunkAction = (dispatch: Dispatch) => any;

export type State = {
  loggedIn: boolean,
  fetching: boolean,
  profile: Object,
  contacts: Array<Object>,
  navigation: Array<Object>,
  message: { type?: string, text?: string },
  labels: Object,
  loginForm: {
    username: string,
    password: string,
    valid: boolean
  }
};
