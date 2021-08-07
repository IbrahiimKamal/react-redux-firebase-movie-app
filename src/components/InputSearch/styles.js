import { css } from '@emotion/react';

export const formStyles = css`
  position: relative;
`;

export const inputStyles = css`
  border: 1px solid var(--grey-color);
  padding: 0.5rem 0.5rem;
  border-radius: 5rem;

  &:focus {
    outline: none;
    border-color: yellow;
  }
`;

export const searchIconStyles = css`
  position: absolute;
  top: 14%;
  right: 4%;
  color: var(--grey-color);
  cursor: pointer;
  display: none;

  @media (min-width: 992px) {
    display: block;
  }
`;
