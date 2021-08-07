/** @jsxImportSource @emotion/react */

import { useHistory } from 'react-router';

import ToggleIcon from '../../ToggleIcon/ToggleIcon';

import logoImg from '../../../assets/images/logo.png';

import { logoContainerStyles, logoStyles } from './styles';

const LogoToggle = ({ handleClick, isActive }) => {
  const history = useHistory();

  return (
    <div css={logoContainerStyles} onClick={handleClick}>
      <span>
        <ToggleIcon isActive={isActive} />
      </span>
      <img
        onClick={() => history.push('/')}
        css={logoStyles}
        src={logoImg}
        alt="logo"
      />
    </div>
  );
};

export default LogoToggle;
