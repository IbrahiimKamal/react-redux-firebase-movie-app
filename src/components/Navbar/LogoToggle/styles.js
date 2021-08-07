import { css } from '@emotion/react';

export const logoContainerStyles = css`
  display: flex;
  align-items: center;
`;

export const logoStyles = css`
  display: block;
  width: 100px;
  margin-left: 1rem;
  cursor: pointer;

  @media (min-width: 992px) {
    margin-left: 0;
  }
`;
