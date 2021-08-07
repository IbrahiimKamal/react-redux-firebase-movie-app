/** @jsxImportSource @emotion/react */

import Header from '../Header/Header';
import LogoToggle from '../LogoToggle/LogoToggle';
import NavbarLinks from '../NavbarLinks/NavbarLinks';
import InputSearch from '../../InputSearch/InputSearch';
import UserAvatar from '../../UserAvatar/UserAvatar';

import { headerStyles, navStyles } from './styles';

const MainNavbar = () => {
  return (
    <Header styles={headerStyles}>
      <div className="container">
        <nav css={navStyles}>
          <LogoToggle />

          <NavbarLinks />

          <InputSearch />

          <UserAvatar />
        </nav>
      </div>
    </Header>
  );
};

export default MainNavbar;
