const SET_TOKEN = "set_token";
const SET_DATA = "set_data";

const AuthInitialState = {
  token: null,
};

const DataState = {
  data: null,
};

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export const setData = (data) => ({
  type: SET_DATA,
  data,
});

export const AuthReducer = (state = AuthInitialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case SET_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};
