import { css } from '@emotion/react';

export const avatarStyles = css`
  position: relative;
  cursor: pointer;
`;

export const avatarImgStyles = css`
  display: block;
  width: 50px;
`;

export const avatarLinksStyles = ({ isActive }) => css`
  position: absolute;
  right: 3%;
  top: 105%;
  background-color: var(--white-color);
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  border-radius: 0.3rem;
  margin-top: 0.2rem;
  text-align: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: -31%;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 18px 18px 0 18px;
    border-color: var(--white-color) transparent transparent transparent;
    left: 78%;
    transform: translateX(-50%) translateY(100%) rotate(180deg);
  }

  ${isActive === true &&
  `
    opacity: 1;
    pointer-events: all;
  `}
`;

export const avatarLinkStyles = css`
  color: var(--primary-color);
  padding: 0.5rem 0;
`;
