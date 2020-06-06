import styled, { css } from "styled-components";
import { rem, rgba } from "polished";
import { Link } from "react-router-dom";

import { Container as TextStyled } from "components/Text/styles";

export interface RouteItem {
  id: string;
  title: string;
  anchor: string;
}

interface MenuPageProps {
  open: boolean;
  items?: Array<RouteItem>;
}

export const Container = styled.div``;

export const Button = styled.div`
  width: ${rem("71px")};
  position: relative;

  cursor: pointer;
  transition: 0.3s;

  :hover {
    transition: 0.3s;
    opacity: 0.7;
  }

  :active {
    transition: 0.3s;
    opacity: 0.5;
  }

  :before,
  :after {
    content: "";
    width: 8px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.primary};

    position: absolute;
    right: 0;
  }

  :after {
    top: 5px;
  }

  :before {
    bottom: 5px;
  }
`;

export const MenuPage = styled.div<MenuPageProps>`
  position: fixed;
  top: ${({ open }) => (open ? 0 : "-5vh")};
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => rgba(theme.colors.primary, 0.95)};

  z-index: ${({ open }) => (open ? 2 : -1)};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: 0.3s;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;

  z-index: 1;
`;

export const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Item = styled(Link)<MenuPageProps>`
  position: relative;
  top: ${({ open }) => (open ? "0" : "-50px")};
  transition: 0.7s;

  ${({ items }) =>
    items &&
    items.map(
      (item, index) =>
        item &&
        css`
          :nth-child(${index + 1}) {
            transition-delay: ${"." + index + 2}s;
          }
        `
    )}

  :not(:nth-last-child(1)) {
    margin-bottom: ${rem("30px")};
  }

  ${TextStyled} {
    transition: 0.3s;
    position: relative;
    left: 0;

    :hover {
      left: 20px;
      transition: 0.3s;
      opacity: 0.9;
    }

    :active {
      opacity: 0.8;
      transition: 0.3s;
    }
  }
`;

export const Close = styled.button`
  background: none;
  border: none;

  cursor: pointer;

  position: absolute;

  top: 50px;
  right: 70px;
  z-index: 2;

  width: 20px;
  height: 20px;

  :after,
  :before {
    content: "";
    width: 25px;
    height: 2px;

    position: absolute;
    background-color: ${rgba("#fff", 0.7)};

    top: 9px;
    left: -3px;
  }

  :before {
    transform: rotate(-45deg);
  }

  :after {
    transform: rotate(45deg);
  }
`;
