import styled from 'styled-components';

import { surge, translate } from '../../styles/animations';


export const SelectContainer = styled.div`
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
  article{
    padding: 20px;
    background: ${props => props.theme.colors.background}; 
    width: 100%;
    max-width: 400px;
    margin: 30px auto;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${surge} 0.4s backwards;
    font-family: Noto Sans JP, sans-serif;
    h1{
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 20px;
      color: ${props => props.theme.colors.text};
    }
    h4{
      color: ${props => props.theme.colors.secondary};
      font-size: 17px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    p{
      color: ${props => props.theme.colors.primary};
      font-weight: 800;
    }
    button{
      width: 80%;
      margin: 14px auto;
      border: 0;
      padding: 13px 24px;
      border-radius: 5px;
      background: ${props => props.theme.colors.primary};
      color: #FFF;
      font-family: Noto Sans JP, sans-serif;
      font-size: 18px;
      cursor: pointer;
      font-weight: 600;
    }
  }
  span{
    font-family: Noto Sans JP, sans-serif;
    font-size: 15.6px;
    color: ${props => props.theme.colors.secondary};
  }
  >form{
    width: 100%;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${surge} 0.4s backwards;
    animation-delay: 0.6s;
    h1{
      font-family: Noto Sans JP, sans-serif;
      font-size: 20px;
      font-weight: 500;
      color: ${props => props.theme.colors.primary};
    }
    div{
      margin: 20px auto;
      display: flex;
      align-items: center;
      input{
        padding: 7px 10px;
        border: 0px;
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font-family: Noto Sans JP, sans-serif;
        font-size: 16px;
        border-radius: 5px 0px 0px 5px;
      }
      button{
        padding: 9px 10px;
        border: 0px;
        font-family: Noto Sans JP, sans-serif;
        border-radius: 0px 5px 5px 0px;
        background: ${props => props.theme.colors.primary};
        border-radius: 0px 5px 5px 0px;
        color: #FFF;
        cursor: pointer;
      }
    }
  }
`;