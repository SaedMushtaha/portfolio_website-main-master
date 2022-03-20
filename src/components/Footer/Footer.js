import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin , AiFillPhone} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+90-546-447-5019">+90-546-447-5019</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:saedmushtaha@hotmail.com">
          saedmushtaha@hotmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/SaedMushtaha" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/saed-mushtaha-857507140/"target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="tel:+90-546-447-5019">
          <AiFillPhone size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
