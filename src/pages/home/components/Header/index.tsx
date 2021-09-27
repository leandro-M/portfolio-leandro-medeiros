import React from "react";
import Typist from 'react-typist';

import Perspective from "components/Perspective";

import { Text } from "components";

import * as S from "./styles";

const Header: React.FC = () => {

  const links = [
    {
      id: "linkedin",
      url: "https://www.linkedin.com/in/leandro-medeiros/",
      icon: "/images/icons/linkedin.svg"
    },
    {
      id: "github",
      url: "https://github.com/leandro-M",
      icon: "/images/icons/github.svg"
    },
    {
      id: "facebook",
      url: "https://www.facebook.com/leandro.medeiros.9/",
      icon: "/images/icons/facebook.svg"
    },
    {
      id: "instagram",
      url: "https://www.instagram.com/_leandro_m/",
      icon: "/images/icons/instagram.svg"
    },
  ];

  const handleGoToNextSection = () => {
    const experiences = document.querySelector("#experiences") as HTMLElement

    window.scrollTo({
      top: experiences.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.MyName>
          <Text>
            Olá, me chamo <Text color="terciary">Leandro Medeiros</Text>
          </Text>
        </S.MyName>

        <Perspective css={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: "0",
          left: "0",
        }}>
          <Perspective>
            <S.Me />
          </Perspective>
        </Perspective>

        <S.Center>
          <Text type="presentationTitle" color="primary">
            Full stack <Text type="presentationTitle" color="terciary">developer</Text>
          </Text>
        </S.Center>

        <S.Socials>
          <Text type="body" color="primary">Sigam-me</Text>

          <S.Dash />
          {
            links.map(link => (
              <S.Anchor key={`icon-link-${link.id}`} href={link.url} target="_blank">
                <S.Icon src={link.icon} />
              </S.Anchor>
            ))
          }
        </S.Socials>

        <S.Bottom onClick={handleGoToNextSection}>
          <S.ArrowDown src="/images/icons/chevron-down.svg" />
        </S.Bottom>

        <S.Descriptions>
          <Text color="secondary">
            E: eu@leandromedeiros.com <br />
            T: +55 (11) 9 7800 2101
          </Text>

          <Text color="secondary">
            <Typist cursor={{show: false}}>
              Seja bem vindo ao meu portfólio, aqui você encontrará minhas <br /> experiências  profissionais e um contato para tomarmos um café <Text color="terciary">♥</Text>
            </Typist>
          </Text>
        </S.Descriptions>
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
