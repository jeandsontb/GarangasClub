import React from 'react';
import { 
    Container,
    FooterBox,
    FooterLogo,
    FooterDescription,
    FooterBoxLinks,
    FooterLinks,
    FooterCopyright,
    FooterDesigner,
    FooterTextAuthor,
    FooterBoxAuthor,
    FooterText
 } from './styles';

const Footer = ({ scroll }) => {
    return ( 
        <Container  >
            <FooterBox scroll={scroll} >
                <FooterLogo src="/assets/logo.png" />
                <FooterDescription>
                    Grupos de amigos unidos por um interesse comum <br />--- Carros Antigos ---
                </FooterDescription>
                <FooterBoxLinks> 
                    <FooterLinks>Home</FooterLinks>
                    <FooterLinks>Parceiros</FooterLinks>
                    <FooterLinks>História</FooterLinks>
                    <FooterLinks>Integrantes</FooterLinks>
                    <FooterLinks>Carros a venda</FooterLinks>
                </FooterBoxLinks>
                <FooterCopyright>Copiryght@2020 Todos os direitos reservados</FooterCopyright>
            </FooterBox>
            <FooterDesigner>
                <FooterBoxAuthor>
                    <FooterTextAuthor>Site desenvolvido por</FooterTextAuthor>
                    <FooterText>Jeandson Tenorio</FooterText>
                </FooterBoxAuthor>
            </FooterDesigner>
        </Container>
    );
}


export default Footer;