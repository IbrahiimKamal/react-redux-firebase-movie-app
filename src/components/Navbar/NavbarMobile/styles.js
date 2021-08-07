import { css } from '@emotion/react';

export const headerStyles = css`
  @media (min-width: 992px) {
    display: none;
  }
`;

export const headeStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const linksStyles = ({ navbarOpen }) => css`
  flex-direction: column;
  text-align: center;
  height: 0;
  overflow: hidden;
  transition: height 0.3s, padding 0.3s;

  ${navbarOpen === true &&
  `
  padding: 1rem 0;
    height: 300px;
  `}
`;

export const linkStyles = css`
  display: inline-block;
  padding: 1rem 0;
`;

export const inputSearchStyles = css`
  right: 106px;
`;
