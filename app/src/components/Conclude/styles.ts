import styled from 'styled-components';

export const ConcluedContainer = styled.main`
  padding: 40px 10px 80px 10px;
  padding-bottom: 10px;
  width: 100%;
  max-width: 870px;
  margin: 0 auto;
  header{
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
  section{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    >h1{
      font-family: Noto Sans JP, sans-serif;
      color: ${props => props.theme.colors.primary};
      font-size: 19px;
    }
    >div{
      width: 100%;
      >p{
        display: block;
        font-family: Noto Sans JP, sans-serif;
        font-size: 16px;
        margin: 20px 0px;
        text-align: left;
        font-weight: 400;
        color: ${props => props.theme.colors.primary};
      }
    }
    >footer{
      width: 100%;
      max-width: 400px;
      margin: 0px auto;
      padding: 15px 23px;
      min-height: 40px;
      background: #E8FFE4;
      width: 90%;
      margin: 10px;
      display: flex;
      border-radius: 5px;
      align-items: center;
      justify-content: space-between;
      svg:last-child{
        width: 25px;
        height: 25px;
        margin: 0px 10px;
      }
      img:first-child{
        width: 35px;
        margin-right: 5px;
      }
      div{
        display: flex;
        align-items: center;
        margin: 0px 5px;
      }
      h2{
        font-family: Noto Sans JP, sans-serif;
        font-size: 15px;
        color: ${props => props.theme.colors.primary};
      }
      h4{
        font-family: Noto Sans JP, sans-serif;
        font-size: 16px;
        color: #31AC2B;
      }
    }
    a{
      padding: 14px 23px;
      background: ${props => props.theme.colors.primary};
      border: 0;
      font-family: Noto Sans JP, sans-serif;
      font-size: 17px;
      cursor: pointer;
      border-radius: 5px;
      color: #FFF;
      margin: 14px auto;
      text-decoration: none;
    }
    span{
      font-family: Noto Sans JP, sans-serif;
      font-size: 15px;
      color: ${props => props.theme.colors.primary};
    }
    article{
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      @media(max-width: 600px){
        display: flex;
        flex-direction: column;
      }
      grid-gap: 10px;
      >div{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 7px;
        border-radius: 5px;
      }
      >div{ 
        h3{
          font-family: Noto Sans JP, sans-serif;
          font-size: 15px;
          color: ${props => props.theme.colors.text};
          margin: 0px 5px;
        }
        h2{
          font-family: Noto Sans JP, sans-serif;
          font-size: 15px;
          color: ${props => props.theme.colors.primary};
        }
        h4{
          font-family: Noto Sans JP, sans-serif;
          font-size: 16px;
          color: #31AC2B;
        }
        h1{
          font-family: Noto Sans JP, sans-serif;
          font-size: 16px;
          color: ${props => props.theme.colors.secondary};
        }
        strong{
          font-family: Noto Sans JP, sans-serif;
          margin-right: 10px;
        }
        >div{
          padding: 15px 23px;
          background: #E8FFE4;
          width: 90%;
          min-height: 40px;
          margin: 10px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          svg:last-child{
            width: 25px;
            height: 25px;
            margin: 0px 10px;
          }
          img:first-child{
            width: 35px;
            margin-right: 5px;
          }
          div{
            display: flex;
            align-items: center;
            margin: 0px 5px;
          }
        }
      }
    }
  }
`;