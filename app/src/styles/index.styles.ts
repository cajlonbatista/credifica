import styled from 'styled-components';

import { surge } from './animations';


export const MainContainer = styled.section`
  width: 100vw;
  height: 100vh;
  main{
    display: grid;
    grid-template-columns: repeat(auto-fit, min(100%, 300px));
    animation: ${surge} 0.7s linear;
    grid-gap: 10px;
    padding: 10px;
    div{
      background: #E8F3F4;
      padding: 10px 20px;
      border: 2px dashed transparent;
      border-radius: 5px;
      transition: all 0.3s;
      cursor: pointer;
      :hover{
        border-color: ${props => props.theme.colors.primary};
      }
      button{
        padding: 7px 10px;
        border: 0;
        font-family: Noto Sans JP, sans-serif;
        color: #FFF;
        border-radius: 5px;
        cursor: default;
        outline: none;
        img{
          margin-right: 10px;
        }
      }
      h1:first-child{
        color: #31AC2B;
        font-size: 17px;
      }
      h1{
        font-family: Noto Sans JP, sans-serif;
        font-size: 14px;
        border-color: ${props => props.theme.colors.text};
      }
    }
  }
`;