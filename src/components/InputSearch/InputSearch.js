/** @jsxImportSource @emotion/react */

import { AiOutlineSearch } from 'react-icons/ai';

import { formStyles, inputStyles, searchIconStyles } from './styles';

const InputSearch = () => {
  return (
    <form css={formStyles}>
      <input
        css={inputStyles}
        type="text"
        placeholder="search"
        autoComplete="off"
      />
      <span css={searchIconStyles}>
        <AiOutlineSearch size={25} />
      </span>
    </form>
  );
};

export default InputSearch;
