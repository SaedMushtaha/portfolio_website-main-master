import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillPhone , AiFillwhatsapp, AiFillemail} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>SAED MUSHTAHA</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/SaedMushtaha" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/saed-mushtaha-857507140/"target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="tel:+90-546-447-5019">
          <AiFillPhone size="3rem"/>
        </SocialIcons>
        {/* <SocialIcons href="whatsapp://send?abid=+905464475019&text=Hello%2C%20World!" target="_blank">
          <AiFillemail size="3rem"/>
        </SocialIcons> */}
      </Div3>
    </Container>
    // whatsapp://send?abid=+5511999999999&text=Hello%2C%20World!
);

export default Header;
