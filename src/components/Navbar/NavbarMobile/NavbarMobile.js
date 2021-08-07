/** @jsxImportSource @emotion/react */

import { useSelector, useDispatch } from 'react-redux';

import { closeNavbar } from '../../../redux/navbar/navbar_actions';

import UserAvatar from '../../UserAvatar/UserAvatar';
import Header from '../Header/Header';
import LogoToggle from '../LogoToggle/LogoToggle';
import NavbarLinks from '../NavbarLinks/NavbarLinks';
import InputSearch from '../../InputSearch/InputSearch';

import {
  linksStyles,
  headeStyles,
  linkStyles,
  headerStyles,
  inputSearchStyles,
} from './styles';

const NavbarMobile = () => {
  const { navbarOpen } = useSelector((state) => state.navbarOpen);
  const dispatch = useDispatch();

  return (
    <Header styles={headerStyles}>
      <div className="container">
        <nav>
          <div css={headeStyles}>
            <LogoToggle />
            <UserAvatar />
          </div>
          <NavbarLinks
            styles={linksStyles({ navbarOpen })}
            otherLinkStyles={linkStyles}
            handleClick={() => dispatch(closeNavbar())}
          >
            <InputSearch styles={inputSearchStyles} />
          </NavbarLinks>
        </nav>
      </div>
    </Header>
  );
};

export default NavbarMobile;
