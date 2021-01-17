import styled from 'styled-components';

export const SimulTaxasContainer = styled.main`
  padding: 100px 10px 10px 10px;
  section:first-child{
    width: 50%;
    display: flex;
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
  section:last-child{
    
  }
`;