import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import MenuMobile from '../../components/MenuMobile';
import MenuFloat from '../../components/MenuFloat';
import Footer from '../../components/Footer';
import {  
    HeadHistoric,
    Content,
    ContentBox,
    ContentImage,
    ContentBoxText,
    ContentText
} from './styles'; 

const Historic = () => {

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
            <HeadHistoric>
                <Header />
                <MenuFloat active={menu}/>
                <MenuMobile />
            </HeadHistoric>

            <Content>
                <ContentBox>
                    <ContentImage src="/assets/historic.jpg" alt="Primeiro encontro" />
                    <ContentBoxText>
                        <ContentText >
                            Tudo começou no final de uma tarde com apenas uma negociação do seu fusca,
                            Dyogo co-fundador do Garangas estava para se desfazer do seu fusca quando
                            nesse momento uma pessoa que não tinha nada haver, se envolve em seu negócio 
                            chamando sua atenção para que ele não concretizasse a venda, e assim o 
                            negócio não foi fechado naquele dia, após esse dia iniciou uma amizade
                            e interesse pelos carros antigos onde foi formado o grupo no whatsapp
                            e  iníciando aí uma grande amizade, em pouco tempo já teria mais de 50 
                            integrantes todos unidos e compartilhando experiências por um único interesse,  
                            Carros Antigos ou GARANGAS CLUB.
                        </ContentText>
                    </ContentBoxText>
                </ContentBox>
            </Content>



            <Footer />
        </>
    );
}

export default Historic;