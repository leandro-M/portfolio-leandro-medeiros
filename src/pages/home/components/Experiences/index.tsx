import React from "react";

import pixterLogo from "assets/images/pixter-logo.png";
import fatecLogo from "assets/images/fatec-logo.png";
import icloudsLogo from "assets/images/iclouds-logo.svg";

import { Grid, TitleSection } from "components";

import {
  Container,
  Item,
  Image,
  Content,
  Position,
  Time,
  Place,
  Description,
} from "./styles";

const Experiences: React.FC = () => {
  return (
    <Container id="experiences">
      <Grid>
        <Grid width="800">
          <TitleSection>My professional &nbsp; experience</TitleSection>

          <Item>
            <Image src={pixterLogo} />

            <Content>
              <Position>
                Full stack developer
                <Time>jan. 2019 - today</Time>
              </Position>
              <Place uppercase>Pixter</Place>
              <Description>
                In the beginning, I worked at Porto Seguro Faz to make the
                front-end, I always loved the back-end and studied the
                JavaScript stack for front-end and back-end.
                <br />
                I started many projects and used (use ...) the tools of the
                moment like React and Node. I started using Google Cloud and Aws
                (serverless ♥) every day.
                <br />
                Today I am working on the front-end of a project focused on
                investment in Porto Seguro by Pixter.
                <br />
                I manage myself in the activities, always using the best
                practices to develop the product.
                <br />
                <br />
                <strong>Stacks used</strong>: PHP, Javascript (vanilla), React,
                Node, CSS3, Sass,StyledComponents, HTML5, Gulp, Webpack, Grunt
              </Description>
            </Content>
          </Item>

          <Item>
            <Image src={fatecLogo} />

            <Content>
              <Position>
                Volunteer Teacher
                <Time>jan. 2018 - dec. 2018</Time>
              </Position>
              <Place uppercase>Fatec São Paulo</Place>
              <Description color="secondary">
                Volunteer professor at the Fatec Itapetininga Software Factory.
                The courses were taught on Saturdays, students were introduced
                to how to start developing the front-end.
                <br />
                <br />
                <strong>Stacks used</strong>: HTML5, CSS3 and Javascript
                concepts were presented
              </Description>
            </Content>
          </Item>

          <Item>
            <Image src={icloudsLogo} />

            <Content>
              <Position>
                Front-end
                <Time>aug. 2015 - dec. 2018</Time>
              </Position>
              <Place uppercase>iClouds</Place>
              <Description color="secondary">
                I created many libraries and developed development patterns. In
                the beginning, the stacks used were simple, like HTML5, CSS3,
                LESS (with gulp or grunt) and PHP.
                <br />
                After a while developing websites, we went to the mobile area
                where we used HandlebarsJS with Cordova to develop ... This was
                temporary until we met AngularJS, it changed the way we develop
                applications with the first version of Ionic.
                <br />
                We develop several types of systems, such as Ecommerce, CRM,
                products and services.
                <br />
                <br />
                <strong>Stacks used</strong>: HTML5, CSS3, Javascript, PHP,
                CakePHP, HandlebarsJS, React, Angular 2, AngularJS, Gulp, Grunt,
                Webpack, Sass, less, stylus.
              </Description>
            </Content>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Experiences;
