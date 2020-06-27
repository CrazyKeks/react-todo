import styled from 'styled-components';

export const DefButton = styled.button`
  outline: none;
  border: 1px solid transparent;
  font-family: Roboto,Helvetica Neue,sans-serif;
  padding: 7px 14px;
  border-radius: 4px;
  background-color: ${({background})=>background?background:'#3f51b5'};
  margin: ${({margin})=> margin ? margin : "0px"};
  transition:0.3s ease-in-out;
  cursor: pointer;
  color:#fff;
  font-weight:600;
  font-size:16px;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
`;