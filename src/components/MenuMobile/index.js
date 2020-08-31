import React, { useState } from 'react';
import {
    Container,
    BoxMenu,
    MenuImage,
    Image,
    MenuButton,
    BoxContentMenu
} from './styles';

import MenuText from '../../components/MenuText';

export default () => {

    const [ openMenu, setOpenMenu ] = useState(false);

    const handleMenuActive = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <Container>

            <BoxMenu>
                <MenuImage>
                    <Image src="/assets/logo.png" />
                </MenuImage>

                <MenuButton onClick={handleMenuActive} >
                    {openMenu === false &&
                        <svg width="40" height="60" viewBox="0 0 247 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 3H247M0.5 86H247M0.5 166H247" stroke="white" strokeWidth="10"/>
                        </svg>
                    }
                    {openMenu === true &&
                        <svg width="40" height="60" viewBox="0 0 250 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 3L248 166M248 3L1.5 166" stroke="white" strokeWidth="10"/>
                        </svg>
                    }
                </MenuButton>
            </BoxMenu>

            <BoxContentMenu height={openMenu} >
                {openMenu &&
                   <MenuText   />                  
                }
            </BoxContentMenu>
        </Container>
    );
}