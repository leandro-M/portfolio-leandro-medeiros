import styled from "styled-components";
import { rem } from "polished";

import stacks from "assets/images/stacks.png";

import { Container as TitleSection } from "components/TitleSection/styles";
import { Container as Text } from "components/Text/styles";

export const Container = styled.section`
  margin-top: ${rem("85px")};

  background-image: url(${stacks});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: right center;
  background-attachment: fixed;

  margin-bottom: 80px;

  ${TitleSection} {
    margin-bottom: ${rem("50px")};
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: flex-start;

  :not(:nth-last-child(1)) {
    margin-bottom: ${rem("80px")};
  }
`;

export const Image = styled.img`
  margin-right: ${rem("50px")};
`;

export const Content = styled.div``;

export const Position = styled(Text).attrs({
  color: "primary",
})`
  font-size: ${rem("23px")};

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Time = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: lighter;
  font-family: ${({ theme }) => theme.fontFamily};

  display: flex;
  align-items: center;

  flex: 1;

  :before {
    content: "";
    width: 55px;
    height: 1px;

    display: block;
    margin: 0 25px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Place = styled(Text).attrs({ color: "black", type: "body" })`
  margin: 15px 0;
`;

export const Description = styled(Text).attrs({
  type: "body",
  color: "secondary",
})`
  letter-spacing: 8%;
  line-height: ${rem("30px")};
`;
