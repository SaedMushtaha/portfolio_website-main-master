import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
// import FloatingWhatsApp from '../components/WhatsappFloating/FloatingWhatsApp'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <main>{children}
     {/* <div className="App">
      <FloatingWhatsApp
        phoneNumber="123456789"
        accountName="Foo"
        allowClickAway
        notification
        notificationDelay={60000} // 1 minute
        notificationSound
      />
    </div> */}
    </main> 
     <Footer/>
    </Container>
  )
}
