import { navbarTypes } from './navbar_types';

const initialState = {
  navbarOpen: false,
};

const navbarReducer = (state = initialState, { type }) => {
  switch (type) {
    case navbarTypes.TOGGLE_NAVBAR:
      return {
        ...state,
        navbarOpen: !state.navbarOpen,
      };

    case navbarTypes.CLOSE_NAVBAR:
      return {
        ...state,
        navbarOpen: false,
      };

    default:
      return state;
  }
};

export default navbarReducer;
