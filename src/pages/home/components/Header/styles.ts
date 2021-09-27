import styled, { css, keyframes } from "styled-components";

import { Container as TextStyle } from "components/Text/styles";
import { Container as Grid } from "components/Grid/styles";
import background from "assets/images/layer-bg.png";
import me from "assets/images/layer-me.png";

const upAndDown = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);

    opacity: 0.2;
  }

  100% {
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  background-size: 100% auto;
  background-position: center;
  background-image: url(${background});
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

export const Me = styled.img.attrs({
  src: me
})`
  position: absolute;
  height: 100vh;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
`

export const MyName = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
`

export const Container = styled(Grid)`
  ${({ theme }) => css`
    position: relative;

    width: 100vw;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;


    ${theme.mediaQueries.sm} {
      flex-direction: column;
      height: auto;
    }
  `}
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 90vh;

  
  ${TextStyle} {
    margin-top: 100px;
    position: relative;
    z-index: 2;
  }
`;

export const Socials = styled.div`
  transform: translateX(50%) translateY(-530%) rotate(90deg);
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 25px;

  ${TextStyle} {
    white-space: nowrap;
  }
`

export const Dash = styled.div`
  ${({ theme }) => css`
    width: 50px;
    height: 2px;
    background-color: ${theme.colors.terciary};
  `}
`

export const Anchor = styled.a`
  ${({ theme }) => css`
    padding: 5px;
    border-radius: 100%;
    width: 34px;
    height: 34px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  
    ${theme.waves};
  `}
`

export const Icon = styled.img`
  transform: rotate(-90deg);
  position: relative;
  z-index: 3;
`

export const Bottom = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    right: 10%;
    width: 40px;
    height: 40px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    ${theme.waves};
    animation: ${upAndDown} 1.5s linear infinite;
  `}
`
export const ArrowDown = styled.img`
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 3;
`

export const Descriptions = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  gap: 80px;

  ${TextStyle} {
    line-height: 200%;
  }
`