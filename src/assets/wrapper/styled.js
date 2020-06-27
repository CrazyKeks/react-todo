import styled from 'styled-components';

// тут будут реализованы враперы для позиционирования контента

export const wrapper = styled.div`
  
`;

export const InputWrapper = styled.div `
  position:relative;
  margin: ${({margin})=> margin ? margin : "0px"};

  &::before {
    content: '';
    position:absolute;
    left: 0;
    bottom: 0;
    width:100%;
    height: 2px;
    background-color: #919191;
  }
  
  &::after {
    content: '';
    position:absolute;
    left: 50%;
    bottom: 0;
    width:0%;
    height: 2px;
    background-color: #3f51b5;
    transform:translateX(-50%);
    transition:0.3s ease-in-out;
  }
  
  &:hover:after {
    width:100%
  }
`;