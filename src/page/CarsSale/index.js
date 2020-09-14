import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import MenuMobile from '../../components/MenuMobile';
import MenuFloat from '../../components/MenuFloat';
import Footer from '../../components/Footer';
import {  
    HeadCarSale,
    Container
} from './styles';


const Sale = () => {

    const [ menu, setMenu ] = useState(false);
    const [ scrollCount, setScrollCount ] = useState(0);


    useEffect(() => {
        const manangerScrollPage = () => {
            window.addEventListener("scroll", function (event) {
                let scroll = this.scrollY;
                setScrollCount(scroll);
                
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
            <HeadCarSale>
                <Header />
                <MenuFloat active={menu}/>
                <MenuMobile />

            </HeadCarSale>

            <Container>

            </Container>


            <Footer /> 
        </>
    );
}

export default Sale;