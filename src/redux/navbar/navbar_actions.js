import { navbarTypes } from './navbar_types';

export const toggleNavbar = () => {
  return { type: navbarTypes.TOGGLE_NAVBAR };
};

export const closeNavbar = () => {
  return { type: navbarTypes.CLOSE_NAVBAR };
};
