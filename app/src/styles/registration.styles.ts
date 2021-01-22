import styled from 'styled-components';

import { surge } from './animations';

export const RegisterContainer = styled.main`
  main{
    animation: ${surge} 0.6s linear;
    padding: 10px 20px;
    >header{
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
        max-width: 170px;
        margin-left: 30px;
        color: ${props => props.theme.colors.primary};
        font-size: 30px;
      }
    }
    form{
      width: 100%;
      max-width: 450px;
      margin: 20px auto;
      padding: 10px 20px;
      border-radius: 10px;

      div{
        width: 100%;
        margin: 10px auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        label{
          font-family: Noto Sans JP, sans-serif;
          font-size: 14px;
          color: ${props => props.theme.colors.text};
        }
        input{
          width: 100%;
          background: ${props => props.theme.colors.background};
          padding: 5px 10px;
          font-size: 15px;
          border-radius: 5px;
          appearance: none;
          -webkit-appearance: none;
          font-family: Noto Sans JP, sans-serif;
          border: 0px;
          color: ${props => props.theme.colors.text};
        }
      }
      button{
        width: 100%;
        max-width: 200px;
        display: block;
        margin: 20px auto;
        background: ${props => props.theme.colors.secondary};
        padding: 10px 15px;
        border: 0px;
        font-size: 14px;
        color: #FFF;
        cursor: pointer;
        border-radius: 5px;
        font-family: Noto Sans JP, sans-serif;
      }
      span{
        font-family: Noto Sans JP, sans-serif;
        font-size: 18px;
        font-weight: 500;
        color: ${props => props.theme.colors.secondary};
        margin: 10px auto;
        display: block;
        text-align: center;
      }
    }
  }
`;