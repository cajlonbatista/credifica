import styled, { keyframes } from 'styled-components';

const translate = keyframes`
  0%{
    opacity: 0;
    transform: translateX(-500px);
  }
  60%{
    transform: translateX(0px);
  }
  100%{
    opacity: 1;
  }
`;

const topped = keyframes`
  0%{
    transform: translateY(600px);
  }
  100%{
    transform: translateY(0px)
  }
`;

const surge = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const SimulTaxasContainer = styled.main`
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
  >form{
    width: 100%;
    margin: 40px auto;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    span{
      position: absolute;
      bottom: -40px;
      font-family: Noto Sans JP, sans-serif;
      font-size: 14px;
      color: ${props => props.theme.colors.secondary};
    }
    div{
      width: 100%;
      max-width: 250px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      margin: 0px 30px;
      h1{
        color: ${props => props.theme.colors.primary};
        font-family: Noto Sans JP, sans-serif;
        font-size: 20px;
      }
      input{
        width: 100%;
        max-width: 300px;
        text-align: center;
        background: ${props => props.theme.colors.background};
        padding: 5px 10px;
        font-size: 15px;
        margin-top: 20px;
        border-radius: 5px;
        font-family: Noto Sans JP, sans-serif;
        border: 0px;
        color: ${props => props.theme.colors.text};
      }
    }
    button{
      width: 100%;
      max-width: 100px;
      margin-top: 20px;
      background: ${props => props.theme.colors.secondary};
      padding: 5px 10px;
      border: 0px;
      font-size: 14px;
      color: #FFF;
      cursor: pointer;
      border-radius: 5px;
      font-family: Noto Sans JP, sans-serif;
    }
  }
  footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 10;
    height: 60px;
    animation: ${topped} 0.3s backwards;
    animation-delay: 0.5s;
    background-color: ${props => props.theme.colors.primary};
  }
  article{
    width: 90%;
    max-width: 860px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    overflow-x: auto;
    overflow-y: hidden;
    border-left: 1px solid #E5E5E5;
    border-bottom: 1px solid #E5E5E5;
    border-top: 1px solid #E5E5E5;
    >div{
      display: flex;
      align-items: center;
      >div:first-child{
        padding: 20px;
        height: auto;
        input[type=radio] {
          cursor: pointer;
          background: #B5B5B5;
          transform: scale(1.5);
        }
      }
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
          cursor: pointer;
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
      }
    }
  }
`;