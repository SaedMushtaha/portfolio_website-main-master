import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          {/* Welcome To <br />
          My Personal Portfolio */}
          Hello, I am <br /> Saed Mushtaha 
        </SectionTitle>
        <SectionText>
          {/* Here is my official portfolio includes my previous projects, previous companies, and my skills , and a lot more. */}
           Full Stack Web Engineer
           </SectionText>
    
       <Button label="Write me an E-Mail"  onClick={(e) => {
                window.location = "images/SAEDMUSHTAHACV.pdf";
                e.preventDefault();
            }}>Download My CV</Button> 
            
      </LeftSection>
    </Section>
  </>
);

export default Hero;