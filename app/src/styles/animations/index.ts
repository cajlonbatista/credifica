import { keyframes } from "styled-components";

export const translate = keyframes`
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

export const topped = keyframes`
  0%{
    transform: translateY(600px);
  }
  100%{
    transform: translateY(0px)
  }
`;

export const surge = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;
