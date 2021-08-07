import { css } from '@emotion/react';

export const headerStyles = css`
  display: none;

  @media (min-width: 992px) {
    display: block;
  }
`;

export const navStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
