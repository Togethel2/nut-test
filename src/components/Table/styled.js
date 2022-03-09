import styled from 'styled-components';

export const TableStyle = styled.div`
  padding: 1rem;

  border-collapse: collapse;
  width: 100%;

  tr:hover {background-color: #ddd;}

  th{
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #04AA6D;
    color: white;
  }

  td{
    padding-top: 12px;
    padding-bottom: 12px;
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  element.style {
    height: 100px;
    padding: 20px;
  }

  .create {
    float: right;
    margin: 10px;
  }
`
