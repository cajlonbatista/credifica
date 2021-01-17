import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 60px;
  background-color: ${props => props.theme.colors.primary};
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  img:first-child{
    width: 24px;
    cursor: pointer;
  }
  img{
    width: 230px;
    cursor: pointer;
  }
`