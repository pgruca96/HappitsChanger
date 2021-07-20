import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from "./types";

import { signInUser, signOutUser } from "../../services/firebase.auth";

export const logIn = (email, password) => (dispatch) => {
    return signInUser(email, password).then(data => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: data}
        });
        return Promise.resolve();
    },
    error => {
        dispatch({
            type: LOGIN_FAIL
        });
        return Promise.reject();
    })
};

export const logOut = () => (dispatch) => {
    return signOutUser().then(() => {
        dispatch({
            type: LOGOUT
        })
    })
}