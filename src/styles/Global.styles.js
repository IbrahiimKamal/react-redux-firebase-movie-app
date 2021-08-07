import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;700&display=swap');

        :root {
          --primary-color: #0c0e17;
          --white-color: #fff;
          --grey-color: #97979f;
          --dodgerblue-color: dodgerblue;
          --primary-font-family: 'Montserrat', sans-serif;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: var(--primary-font-family);
          /* background-color: var(--primary-color); */
          height: 5000px;
        }

        ul {
          list-style: none;
        }

        a {
          text-decoration: none;
        }
      `}
    />
  );
};

export default GlobalStyles;
