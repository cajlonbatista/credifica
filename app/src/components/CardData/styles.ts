import styled from 'styled-components';

import { surge, translate } from '../../styles/animations';

export const CardContainer = styled.main`
  padding: 40px 10px 80px 10px;
  section:first-child{
    width: 50%;
    display: flex;
    animation: ${translate} 0.7s backwards;
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
  form{
    width: 100%;
    animation: ${surge} 0.4s backwards;
    animation-delay: 0.6s;
    label{
      font-family: Noto Sans JP, sans-serif;
      color: ${props => props.theme.colors.primary};
      margin: 7px 0px;
    }
    input[type=file]{
      display: none;
    }
    article{
      width: 100%;
      max-width: 960px;
      margin: 40px auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: flex-start;
      @media(max-width: 700px){
        display: flex;
        flex-direction: column;
        align-items: center;
        >div{
          width: 95%;
        }
        input{
          width: 95%!important;
        }
      }
      input{
        width: 80%;
        padding: 14px 16px;
        font-family: Noto Sans JP, sans-serif;
        font-size: 14px;
        font-style: italic;
        margin: 10px 0px;
        font-weight: 600;
        color: ${props => props.theme.colors.text};
        border: 0;
        border-radius: 5px;
        background: ${props => props.theme.colors.background};
      }
      >div:first-child{
        display: flex;
        flex-direction: column;
        >label{
          font-size: 17px;
          margin: 7px 0px;
        }
        div{
          position: relative;
          margin: 10px 0px;
          input{
            margin: 0;
          }
          img{
            position: absolute;
            width: 40px;
            right: 23%;
            top: 11px;
            border-radius: 5px;
          }
        }
      }
      >div:last-child{
        display: flex;
        flex-direction: column;
        >label{
          font-size: 17px;
          margin: 7px 0px;
        }
        label:last-child{
          font-size: 14px;
        }
        div{
          margin: 10px 0px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: Noto Sans JP, sans-serif;
          font-size: 13.5px;
          background: ${props => props.theme.colors.background};
          padding: 9px 12px;
          border-radius: 5px;
          font-size: 14px;
          font-style: italic;
          font-weight: 600;
          color: ${props => props.theme.colors.text};
          label{
            font-size: 13.5px;
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
    }
    button{
      display: block;
      width: 98%;
      max-width: 240px;
      margin: 10px auto;
      padding: 10px 20px;
      font-family: Noto Sans JP, sans-serif;
      font-size: 17px;
      font-weight: 600;
      color: #FFF;
      background: ${props => props.theme.colors.primary};
      border: 0;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;