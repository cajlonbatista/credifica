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
  animation: ${translate} 0.3s backwards;
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