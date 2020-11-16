import React from "react";

import { Grid, Text } from "components";

import { Container, Links, Link, RedFlag } from "./styles";

const Footer: React.FC = () => {
  const links = [
    {
      id: "linkedin",
      url: "https://www.linkedin.com/in/leandro-medeiros/",
    },
    {
      id: "github",
      url: "https://github.com/leandro-M",
    },
    {
      id: "facebook",
      url: "https://www.facebook.com/leandro.medeiros.9/",
    },
    {
      id: "instagram",
      url: "https://www.instagram.com/_leandro_m/",
    },
  ];
  return (
    <Container>
      <Grid>
        <Text uppercase>Designed and coded by me.</Text>
        <Text uppercase color="secondary">
          developed with <RedFlag>♥</RedFlag>
        </Text>

        <Links>
          {links.map((item) => (
            <Link key={item.id} href={item.url} target="_blank">
              <Text uppercase color="secondary">
                {item.id}
              </Text>
            </Link>
          ))}
        </Links>
      </Grid>
    </Container>
  );
};

export default Footer;
