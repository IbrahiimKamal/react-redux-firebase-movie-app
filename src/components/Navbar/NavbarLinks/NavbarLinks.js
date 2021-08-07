/** @jsxImportSource @emotion/react */

import { NavLink } from 'react-router-dom';

import { navbarLinks } from '../../../utils/navbarLinks';

import { linksStyles, linkStyles } from './styles';

const NavbarLinks = ({ children, styles, otherLinkStyles, handleClick }) => {
  return (
    <ul css={[linksStyles, styles]}>
      <>
        {navbarLinks.map(({ id, path, text }) => (
          <li key={id} onClick={handleClick}>
            <NavLink
              css={[linkStyles, otherLinkStyles]}
              to={path}
              activeClassName="active-link"
              exact
            >
              {text}
            </NavLink>
          </li>
        ))}
        {children}
      </>
    </ul>
  );
};

export default NavbarLinks;
