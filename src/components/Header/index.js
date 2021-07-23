import React from  'react';
import { Link } from 'react-router-dom';

import { 
    ContainerHeader,
    ContainerHeaderShadow,
    HeaderText,
    HeaderGroup,
    HeaderLink,
    HeaderImage
 } from './styles'; 

import MenuText from '../MenuText';

const handleTopScrollClick = () => {
    window.scrollTo(0, 0);
} 

const Header = ({ active }) => {
    return (
        <>
            <ContainerHeaderShadow />
            <ContainerHeader className="title-static">
                <HeaderText id="title-semantic" >Garangas Club</HeaderText>

                <HeaderGroup>
                <HeaderLink>
                    <Link to="/" style={{textDecoration:'none'}} onClick={handleTopScrollClick} >
                        <HeaderImage src="/assets/logo.png" />
                    </Link>
                </HeaderLink>

                    <MenuText active={active} marginTop={40} />                    
                </HeaderGroup>
            </ContainerHeader> 
        </>
    );
}

export default Header; 