import styled, { keyframes } from 'styled-components';

const translate = keyframes`
  0%{
    opacity: 0;
    transform: translateY(-500px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const HeaderContainer = styled.header`
  min-height: 59px;
  background-color: ${props => props.theme.colors.primary};
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  img:first-child{
    width: 22px;
    cursor: pointer;
  }
  img{
    width: 190px;
    cursor: pointer;
  }
`

export const DrawerContainer = styled.section`
  width: 300px;
  padding: 10px 20px;
  border-radius: 20px;
  div{
    font-family: Noto Sans JP, sans-serif;
    font-size: 14px;
    color: #FFF;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 5px;
    margin: 5px;
    transition: all 0.3s;
    border: 2px solid #FFF;
    :hover{
      border-color: #EF9C4B;
    }
  }
`;