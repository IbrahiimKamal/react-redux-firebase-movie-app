import { css } from '@emotion/react';

export const linksStyles = css`
  display: flex;
`;

export const linkStyles = css`
  padding: 0 1rem;
  color: var(--white-color);
  font-size: 0.875rem;

  &.active-link {
    color: var(--dodgerblue-color);
  }

  &::selection {
    user-select: none;
  }
`;
