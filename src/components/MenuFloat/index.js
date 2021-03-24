import React from 'react';
import { Link } from 'react-router-dom';

import MenuText from '../MenuText';
import { 
    MenuScroll,
    ContainerNav,
    FloatImage,
    Image,
    FloatNav
 } from './styles';

 const handleTopScrollClick = () => {
    window.scrollTo(0, 0);
}

const MenuFloat = ({active}) => {
    return (
        <MenuScroll active={active} >
            {active &&
                <ContainerNav>
                    <FloatImage>
                        <Link to="/" style={{textDecoration:'none'}} onClick={handleTopScrollClick} >
                            <Image src="/assets/logo.png" />
                        </Link>
                    </FloatImage>

                    <FloatNav>
                        <MenuText marginTop={8} />
                    </FloatNav>
                </ContainerNav> 
            }
        </MenuScroll>   
    );
}

export default MenuFloat;