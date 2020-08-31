import React from 'react';

import MenuText from '../MenuText';
import { 
    MenuScroll,
    ContainerNav,
    FloatImage,
    Image,
    FloatNav
 } from './styles';

const MenuFloat = ({active}) => {
    return (
        <MenuScroll active={active} >
            {active &&
                <ContainerNav>
                    <FloatImage>
                        <Image src="/assets/logo.png" />
                    </FloatImage>

                    <FloatNav>
                        <MenuText marginTop={18} />
                    </FloatNav>
                </ContainerNav> 
            }
        </MenuScroll>   
    );
}

export default MenuFloat;