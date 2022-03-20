import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Experience = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Professional Experience</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        {/* <picture>
          <DiReact size="3rem" />
        </picture> */}
        <ListContainer>
          <ListTitle>Most Idea, <small>Istanbul, Turkey</small> </ListTitle>
          <ListParagraph>
          Full Stack Web Developer - Full Time  <br />
          10/2021 to Present
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        {/* <picture>
          <DiFirebase size="3rem" />
        </picture> */}
        <ListContainer>
          <ListTitle>Pioneers Tech, <small>Amman, Jordan</small> </ListTitle>
          <ListParagraph>
          Full Stack Web Developer - Full Time  <br />
          9/2020 to 3/2021
              </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        {/* <picture>
          <DiFirebase size="3rem" />
        </picture> */}
        <ListContainer>
          <ListTitle>A ONE TV</ListTitle>
          <ListParagraph>
          Full Stack Web Developer - Full Time  <br />
          9/2020 to 3/2021
            </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            ASP .NET (MVC, CORE), C# Language, OOP, Databases, Entity Frame Work, SQL, Web API
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
      {/* <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
         <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer> 
      </ListItem> */}
    </List>
    {/* <SectionDivider colorAlt /> */}
  </Section>
);

export default Experience;
