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
  }
`;

export const Container = styled(Grid)`
  position: relative;

  width: 100vw;
  height: calc(100vh - 65px);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  max-width: ${rem("560px")};

  ${TextStyle} {
    :first-of-type {
      margin-bottom: ${rem("35px")};
      margin-left: -15px;

      :after {
        content: "";
        width: ${rem("35px")};
        height: ${rem("35px")};

        border-radius: 100%;

        display: inline-block;
        background-color: ${({ theme }) => theme.colors.terciary};
      }
    }
  }
`;

export const Right = styled.figure`
  margin-right: ${rem("70px")};
`;

export const Image = styled.img`
  max-height: 490px;
`;
