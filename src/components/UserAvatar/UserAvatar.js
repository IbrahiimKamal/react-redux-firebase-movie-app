/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { Link } from 'react-router-dom';

import userAvatarImg from '../../assets/images/user.png';

import {
  avatarImgStyles,
  avatarLinksStyles,
  avatarLinkStyles,
  avatarStyles,
} from './styles';

const UserAvatar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <span css={avatarStyles} onClick={() => setIsActive(!isActive)}>
      <img css={avatarImgStyles} src={userAvatarImg} alt="user avatar" />
      <span css={avatarLinksStyles({ isActive })}>
        <Link to="/login" css={avatarLinkStyles}>
          Login
        </Link>
        <Link to="/register" css={avatarLinkStyles}>
          Register
        </Link>
      </span>
    </span>
  );
};

export default UserAvatar;
