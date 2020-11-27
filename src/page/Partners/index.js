import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import MenuMobile from '../../components/MenuMobile';
import MenuFloat from '../../components/MenuFloat';
import Footer from '../../components/Footer';
import {  
    HeadPartners,
    Container,
    ContainerTitle,
    ContainerTitleText,
    ContainerTitleLine,
} from './styles';


const Partners = () => {

    const [ menu, setMenu ] = useState(false);


    useEffect(() => {
        const manangerScrollPage = () => {
            window.addEventListener("scroll", function (event) {
                let scroll = this.scrollY;
                
                if( scroll > 180 ){
                    setMenu(true);           
                }else {
                    setMenu(false);
                } 
            });
        }

        manangerScrollPage();
    }, []);

    return (
        <>
            <HeadPartners >
                <Header />
                <MenuFloat active={menu}/>
                <MenuMobile />
            </HeadPartners>


            <Container>
                <ContainerTitle>
                    <ContainerTitleText>PARCEIROS</ContainerTitleText>
                    <ContainerTitleLine  />
                </ContainerTitle>

            </Container>


            <Footer />
        </>
    );
}

export default Partners;