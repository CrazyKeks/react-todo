import styled from 'styled-components';

// тут будут стандартные заголовки

export const DefTitle = styled.h1`
  text-align:center;
  font-size:24px;
  font-family: Roboto,Helvetica Neue,sans-serif;
  margin:0;
  margin-bottom: ${({marginBottom})=>marginBottom ? marginBottom : '20px'};
  font-weight: 400;
`;