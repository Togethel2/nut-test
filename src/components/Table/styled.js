import styled from 'styled-components';

export const TableStyle = styled.div`
  padding: 1rem;

  table {
    border-collapse: collapse;
    width: 100%;

    tr:nth-child(even){background-color: #f2f2f2;}
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
  }
`
