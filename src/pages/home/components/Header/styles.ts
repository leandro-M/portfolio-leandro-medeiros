import styled from "styled-components";
import { rem, rgba } from "polished";

import { Container as TextStyle } from "components/Text/styles";
import { Container as Grid } from "components/Grid/styles";

import linesHeader from "assets/images/lines-header.png";

interface PropsWrapper {
  content: string;
}

export const Wrapper = styled.article<PropsWrapper>`
  background-image: url(${linesHeader});
  background-size: 100% auto;
  background-position: center;

  :before {
    content: '${({ content }) => content}';
    
    ${({ theme }) => theme.fontTypes.presentationTitle};
    
    font-size: ${rem("380px")};
    color: ${({ theme }) => rgba(theme.colors.terciary, 0.1)};

    position: absolute;
    bottom: -6%;
    left: -10%;

    ${({theme}) => theme.mediaQueries.sm} {
      display: none;
    }
  }
`;

export const Container = styled(Grid)`
  position: relative;

  width: 100vw;
  height: calc(100vh - 65px);

  display: flex;
  align-items: center;
  justify-content: space-between;


  ${({theme}) => theme.mediaQueries.sm} {
    flex-direction: column;
    height: auto;
  }
`;

export const Left = styled.div`
  max-width: ${rem("560px")};

  ${({theme}) => theme.mediaQueries.sm} {
    max-width: inherit;
  }

  ${TextStyle} {
    :first-of-type {
      margin-bottom: ${rem("35px")};
      margin-left: -15px;

      ${({theme}) => theme.mediaQueries.sm} {
        margin-top: 50px;
        font-size: ${rem("100px")};
        margin-left: auto;
        margin-right: auto;
      }

      :after {
        content: "";
        width: ${rem("35px")};
        height: ${rem("35px")};

        border-radius: 100%;

        display: inline-block;
        background-color: ${({ theme }) => theme.colors.terciary};

        ${({theme}) => theme.mediaQueries.sm} {
          width: ${rem("15px")};
          height: ${rem("15px")};
        }
      }
    }
  }
`;

export const Right = styled.figure`
  margin-right: ${rem("70px")};

  ${({theme}) => theme.mediaQueries.sm} {
    margin: 0 auto;
  }
`;

export const Image = styled.img`
  max-height: 490px;

  ${({theme}) => theme.mediaQueries.sm} {
    max-width: 100%;
  }

`;
