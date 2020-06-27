import styled from 'styled-components';

export const ItemList = styled.li`
  list-style:none;
  margin: ${({margin})=> margin ? margin : "0px"};
`;