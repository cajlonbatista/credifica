import styled from 'styled-components';

import { surge, translate } from '../../styles/animations';

export const DataReviewContainer = styled.main`
  padding: 40px 10px 80px 10px;
  padding-bottom: 10px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  label{
    font-family: Noto Sans JP, sans-serif;
    font-size: 14px;
    color: ${props => props.theme.colors.primary};
    margin-right: 20px;
    font-style: italic;
    font-weight: 500;
  }
  input{
    width: 100%;
    max-width: 160px;
    font-family: Noto Sans JP, sans-serif;
    font-size: 14px;
    padding: 10px;
    text-align: left;
    border: 0;
    border-radius: 5px;
    color: ${props => props.theme.colors.secondary};
    background: #FFF;
    outline: none;
    font-weight: 500;
    font-style: italic;
  }
  header{
    width: 100%;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div:first-child{
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
    div:last-child{
      padding: 10px 20px;
      background: ${props => props.theme.colors.background};
      border-radius: 5px;
    }
  }
  section{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >div:first-child{
      margin-right: 20px;
    }
    >div{
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      >div:first-child{
        background: #E8FFE3;
      }
      >div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding: 10px 20px;
        background: ${props => props.theme.colors.background};
        border-radius: 5px;
        input{
          width: 100%;
        }
      }
    }
  }
  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span{
      font-family: Noto Sans JP, sans-serif;
      font-size: 15px;
      color: ${props => props.theme.colors.primary};
      margin-top: 20px;
    }
    >div{
      width: 100%;
      margin-top: 10px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      @media(max-width: 600px){
        display: flex;
        flex-direction: column;
      }
      button{
        font-family: Noto Sans JP, sans-serif;
        font-size: 16px;
        border: 0;
        padding: 14px 20px; 
        background: ${props => props.theme.colors.primary};
        color: #FFF;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 600;
      }
      div{
        width: 100%;
        display: flex;
        align-items: center;
        button{
          margin-right: 10px;
          width: 100%;
        }
      }
      >button{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 23px;
          margin-right: 10px;
        }
      }
    }
  }
  article{
    margin-top: 30px;
    table{
      width: 100%;
      padding: 0;
      border: 1px solid #E5E5E5;
      border-top: 0px;
      border-bottom: 0px;
      border-spacing: 0px;
      animation: ${surge} 0.5s backwards;
      >th{
        width: 100%;
        font-size: 17px;
        color: ${props => props.theme.colors.primary};
      }
      tbody, >th{
        background: ${props => props.theme.colors.background};
        font-family: Noto Sans JP, sans-serif;
      }
      tbody th, >th{
        padding: 10px 20px;
      }
      tbody{
        th{
          border-right: 1px solid #E5E5E5;
          font-size: 15px;
          color: ${props => props.theme.colors.text};
        }
        th:last-child{
          border-right: 0px;
        }
      }
      tr{
        td:last-child{
          border-right: 0px;
        }
      }
      tr td{
        padding: 8px 10px;
        border-top: 1px solid #E5E5E5;
        border-right: 1px solid #E5E5E5;
        text-align: center;
        font-family: Noto Sans JP, sans-serif;
        font-size: 14px;
        color: ${props => props.theme.colors.text};
      }
      tr:last-child td{
        border-bottom: 1px solid #E5E5E5;
        
      }
    }
  }
`;