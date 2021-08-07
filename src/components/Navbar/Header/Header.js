/** @jsxImportSource @emotion/react */

import { headerStyles } from './styles';

const Header = ({ children, styles }) => {
  return <header css={[headerStyles, styles]}>{children}</header>;
};

export default Header;
