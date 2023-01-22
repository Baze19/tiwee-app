import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    console.log(formData,"fm")
    const { data,resp } = await api.signUp(formData);
console.log(data,'data',resp,"resp");
    dispatch({ type: AUTH, data });

    router('/');
  } catch (error) {
    console.log(error);
  }
};