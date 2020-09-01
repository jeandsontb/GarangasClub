import React from  'react';

import { 
    ContainerHeader,
    HeaderText,
    HeaderGroup,
    HeaderLink,
    HeaderImage
 } from './styles'; 

import MenuText from '../MenuText';

const Header = ({ active }) => {
    return (
        <ContainerHeader className="title-static">
            <HeaderText id="title-semantic" >Garangas Club</HeaderText>

            <HeaderGroup>
                <HeaderLink id="title-logo" href="">
                    <HeaderImage src="/assets/logo.png" />
                </HeaderLink>

                <MenuText active={active} marginTop={40} />                    
            </HeaderGroup>
        </ContainerHeader> 
    );
}

export default Header; 