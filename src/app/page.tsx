"use client"
// import { Header } from './components';
import styles from './page.module.css'
import { NavbarContainer, Logo, NavLinks, NavLinkItem, ContactButton } from './components/Styles/Navbar';
import { LinkRedirectBtn,  ButtonWrapper,   } from './components/Styles/RedirectBtn';
import Link from 'next/link';

export default function Home() {

  return (
    <div>

       <NavbarContainer>
    <Logo>KRIOTEK</Logo>
    <NavLinks>
      <NavLinkItem>
        <Link href="/services">Home</Link>
      </NavLinkItem>
      <NavLinkItem>
        <Link href="/projects">About</Link>
      </NavLinkItem>
      <NavLinkItem>
        <Link href="/about">Services</Link>
      </NavLinkItem>
    </NavLinks>
    <Link href={'#'}>
      <ContactButton>Contact Us</ContactButton>
    </Link>
  </NavbarContainer>
  
    {/* Login & Registration Buttons this Redirects you on that page */}

     <ButtonWrapper>
     <Link href={'/login'}>
        <LinkRedirectBtn>Login</LinkRedirectBtn>
     </Link>
     
     <Link href={'/signup'}>
        <LinkRedirectBtn>Registration</LinkRedirectBtn>
     </Link>
    </ButtonWrapper>
    
    </div>
  );
}
