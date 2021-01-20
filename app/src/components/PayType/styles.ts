import styled from 'styled-components';

import { surge, translate } from '../../styles/animations';

export const PayTypeContainer = styled.main`
  padding: 40px 10px 80px 10px;
  section:first-child{
    width: 50%;
    display: flex;
    animation-delay: 0.3s;
    justify-content: center;
    align-items: center;
    img:first-child{
      width: 45px;
      margin: 5px;
    }
    img{
      width: 100px;
      margin: 5px;
    }
    h1{
      font-family: Noto Sans JP, sans-serif;
      max-width: 130px;
      margin-left: 30px;
      color: ${props => props.theme.colors.primary};
      font-size: 30px;
    }
  }
  article:last-child{
    width: 100%;
    max-width: 300px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    animation: ${surge} 0.5s backwards;
    h1{
      font-family: Noto Sans JP, sans-serif;
      font-weight: 400;
      font-size: 19px;
      color: ${props => props.theme.colors.primary};
      margin-bottom: 10px;
    }
    span{
      font-family: Noto Sans JP, sans-serif;
      font-size: 20px;
      color: ${props => props.theme.colors.text};
    }
    span:last-child{
      width: 100%;
      font-size: 14px;
      text-align: right;
    }
    button{
      width: 100%;
      background: ${props => props.theme.colors.primary};
      font-family: Noto Sans JP, sans-serif;
      font-size: 17px;
      margin: 12px auto;
      color: #FFF;
      padding: 20px 25px;
      border: 0px;
      font-weight: 600;
      border-radius: 5px; 
      cursor: pointer; 
    }
    div{
      width: 100%;
    }
    div button{
      outline: none;
      cursor: default;
      opacity: 0.5;
    }
  }
`;