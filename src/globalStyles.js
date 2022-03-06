/**
 * global styles
 */

import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
 .App {
    text-align: center;
    margin:0 auto; /* this will center the page */
    width:1280px; /*  use your width here */
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
  }

  input[type=submit] {
    width: auto;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: left;
    font-size: 16px;
  }

  input[type=submit]:hover {
    background-color: #45a049;
  }

  .flex-child {
    flex: 1;
    min-width: 50px;
    min-height: 50px;
    margin: 10px;
    background-color: $inlineColor;
  }

  .container--flex {
    display: flex;                  /* establish flex container */
    flex-direction: row;            /* default value; can be omitted */
    flex-wrap: nowrap;              /* default value; can be omitted */
    justify-content: space-between;
  }

  label {
    float: left;
    padding-left: 10px
  }
`
export default GlobalStyle;