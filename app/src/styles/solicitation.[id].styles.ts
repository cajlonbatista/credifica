import styled from 'styled-components';

import { translate } from './animations';

export const SolicitationView = styled.main`
  padding: 40px 10px 80px 10px;
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
  >section{
    width: 100%;
    max-width: 1000px;
    margin: 10px auto;
    animation: ${translate} 0.7s backwards;
    margin-top: 40px!important;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    section header, article header{
      padding: 10px 20px;
      border-radius: 5px;
      background: ${props => props.theme.colors.background};
      display: grid;
      margin-bottom: 20px;
      place-items: center;
      h1{
        font-family: Noto Sans JP, sans-serif;
        font-size: 18px;
        color: ${props => props.theme.colors.text};
        strong{
          color: ${props => props.theme.colors.primary};
        }
      }
    }
    section{
      section{
        background: ${props => props.theme.colors.background};
        border-radius: 5px;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        min-height: 180px;
        position: relative;
        margin-top: 25px;
        p{
          font-family: Noto Sans JP, sans-serif;
          font-size: 14px;
          color: ${props => props.theme.colors.text};
        }
        h1{
          font-size: 14px;
          font-family: Noto Sans JP, sans-serif;
          color: #505050;
          margin: 7px 0px;
          font-weight: 600;
          font-style: italic;
        }
      }
      footer{
        margin-top: 24px;
        border-radius: 5px;
        border: 2px dashed ${props => props.theme.colors.primary};
        padding: 10px 20px;
        background: #E8F3F4;
        h1{
          font-family: Noto Sans JP, sans-serif;
          font-style: italic;
          color: #777777;;
          text-align: center;
          margin: 13px 0px;
        }
        button{
          width: 100%;
          max-width: 240px;
          cursor: pointer;
          display: block;
          font-family: Noto Sans JP, sans-serif;
          font-size: 15px;
          color: #FFF;
          font-weight: 500;
          border-radius: 5px;
          margin: 7px auto;
          border: 0px;
          padding: 10px 20px;
          img{
            margin-right: 20px;
          }
        }
        p{
          font-family: Noto Sans JP, sans-serif;
          font-size: 14px;
        }
        div{
          display: flex;
          align-items: center;
          button:first-child{
            margin-right: 10px;
          }
        }
      }
      article{
        background: ${props => props.theme.colors.background};
        border-radius: 5px;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        min-height: 180px;
        position: relative;
        padding-top: 65px!important;
        p{
          position: absolute;
          top: 20px;
          left: 20px;
          font-family: Noto Sans JP, sans-serif;
          font-size: 14px;
          color: ${props => props.theme.colors.text};
          text-align: left;
          display: block;
        }
        h1{
          font-size: 16px;
          margin-top: 14px;
        }
        h1, h2{
          font-weight: 600;
          font-style: italic;
        }
        strong{
          color: #31AC2B;
        }
        div{
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          h2{
            font-size: 17px;
            font-family: Noto Sans JP, sans-serif;
            color: #505050;
          }
          h1, h2{
            margin-right: 15px;
          }
          img{
            width: 40px;
          }
        }
      }
    }
    article{
      div{
        display: grid;
        grid-template-columns: repeat(auto-fit, min(100%, 200px));
        grid-gap: 10px;
        div{
          background: ${props => props.theme.colors.background};
          border-radius: 5px;
          padding: 10px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          min-height: 180px;
          h2{
            font-family: Noto Sans JP, sans-serif;
            font-size: 15px;
            color: ${props => props.theme.colors.text};
          }
          h3{
            font-family: Noto Sans JP, sans-serif;
            font-size: 18px;
            font-weight: 600;
            color: #31AC2B;
          }
          img{
            width: 60px;
          }
          span{
            margin: 5px auto;
            text-decoration: underline;
            cursor: pointer;
            font-family: Noto Sans JP, sans-serif;
            color: ${props => props.theme.colors.tones.blue};
          }
        }
      } 
    }
  }
`;