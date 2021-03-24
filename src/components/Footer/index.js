import React from 'react';
import { Link } from 'react-router-dom';
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

 const handleTopScrollClick = () => {
    window.scrollTo(0, 0);
}

const Footer = () => {
    return ( 
        <Container  >
            <FooterBox >
                <FooterLogo src="/assets/logo.png" />
                <FooterDescription>
                    Grupos de amigos unidos por um interesse comum <br />--- Carros Antigos ---
                </FooterDescription>
                <FooterBoxLinks> 
                    <FooterLinks><Link to="/" onClick={handleTopScrollClick} style={{textDecoration:'none', color:"#184059"}}>Home</Link></FooterLinks>
                    <FooterLinks><Link to="/sale" onClick={handleTopScrollClick} style={{textDecoration:'none', color:"#184059"}}>Parceiros</Link></FooterLinks>
                    <FooterLinks><Link to="/historic" onClick={handleTopScrollClick} style={{textDecoration:'none', color:"#184059"}}>História</Link></FooterLinks>
                    <FooterLinks><Link to="/members" onClick={handleTopScrollClick} style={{textDecoration:'none', color:"#184059"}}>Integrantes</Link></FooterLinks>
                    <FooterLinks><Link to="/partners" onClick={handleTopScrollClick} style={{textDecoration:'none', color:"#184059"}}>Carros a venda</Link></FooterLinks>
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