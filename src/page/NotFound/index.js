import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import MenuMobile from '../../components/MenuMobile';
import MenuFloat from '../../components/MenuFloat';
import Footer from '../../components/Footer';
import {  
    HeadNotFound
} from './styles';


const NotFound = () => {

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
            <HeadNotFound >
                <Header />
                <MenuFloat active={menu}/>
                <MenuMobile />

            </HeadNotFound>

            Página não encontrada

            <Footer />
        </>
    );
}

export default NotFound;