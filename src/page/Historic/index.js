import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import MenuMobile from '../../components/MenuMobile';
import MenuFloat from '../../components/MenuFloat';
import Footer from '../../components/Footer';
import api from '../../services/api';
import HistoricFake from '../../components/HistoricFake';
import {  
    HeadHistoric,
    Content,
    ContainerTitle,
    ContainerTitleLine,
    ContainerTitleText,
    ContentBox,
    ContentImage,
    ContentBoxText,
    ContentText,
    BoxHistoric
} from './styles'; 

const Historic = () => {

    const [ loading, setLoading ] = useState(false);
    const [ menu, setMenu ] = useState(false);
    const [ dataHistoric, setDataHistoric] = useState([]);


    useEffect(() => {
        let cancelPromise = true;
        setLoading(true);

        api.get('historic').then(response => {
            if(cancelPromise) {
                setDataHistoric(response.data.data);
                setLoading(false);
            }
        });        

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

        return () => cancelPromise = false;
    }, []);

    return (
        <>
            <HeadHistoric>
                <Header />
                <MenuFloat active={menu}/>
                <MenuMobile />
            </HeadHistoric>

            <Content>

                <ContainerTitle>
                    <ContainerTitleText>HISTÓRIA</ContainerTitleText>
                    <ContainerTitleLine  />
                </ContainerTitle>

                {loading &&
                    <ContentBox>
                        <HistoricFake />
                    </ContentBox>
                }

                {!loading &&
                    <ContentBox>
                        {dataHistoric.length > 0 && dataHistoric.map((data, index) => (
                            <BoxHistoric key={index}>
                                <ContentImage key={index} src={data.image} alt="Primeiro encontro" />
                                <ContentBoxText>
                                    <ContentText >
                                        {data.description}
                                    </ContentText>
                                </ContentBoxText>
                            </BoxHistoric>
                        ))}
                    </ContentBox>
                }
            </Content>



            <Footer  />
        </>
    );
}

export default Historic;