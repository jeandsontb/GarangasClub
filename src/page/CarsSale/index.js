import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import Header from '../../components/Header';
import MenuMobile from '../../components/MenuMobile';
import MenuFloat from '../../components/MenuFloat';
import Footer from '../../components/Footer';
import {  
    HeadCarSale,
    Container,
    ContainerTitle,
    ContainerTitleText,
    ContainerTitleLine,
    Sales,
    Box,
    BoxImage,
    Image,
    ImageTitle,
    BoxText,
    BoxButton,
    ButtonTitle,
    BoxPagination,
    ShowButton,
    ShowButtonTitle,
    ContainerModal,
    ModalBody,
    SaleDetail,
    SaleImgIndex,
    SaleButtonThumb,
    SaleButtonThumbImage,
    SaleBody,
    SaleBodyTitle,
    SaleBodyDescription,
    SaleBodyPhone,
    SaleBodyPrice,
} from './styles';


const Sale = () => {

    const [ menu, setMenu ] = useState(false);
    const [ sales, setSales ] = useState([]);
    const [ idSale, setIdSale ] = useState(0);
    const [ modalStatus, setModalStatus ] = useState(false);
    const [ idSaleOne, setIdSaleOne ] = useState({});
    const [ activeImg, setActiveImg ] = useState(0);


    useEffect(() => {
        const manangerScrollPage = () => {

            api.get('carsales').then(resCarSale => {
                setSales(resCarSale.data);
            });

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

    useEffect(() => {
        api.get(`carsales/${idSale}`).then(resSaleId => { 
            setIdSaleOne(resSaleId.data);
        })
    }, [idSale]);


    const handleFocusModal = (id) => {
        setIdSale(id);
        setModalStatus(true);
    }

    const handleCloseModal = (e) => {
        if( e.target.classList.contains('ModalBg')) {
            setModalStatus(false);
            setActiveImg(0);
        }
    }

    const handleRenderImg = ( id ) => {
        setActiveImg(id);
    }

    return (
        <>
            <HeadCarSale>
                <Header />
                <MenuFloat active={menu}/>
                <MenuMobile />
            </HeadCarSale>

            <Container>
                <ContainerTitle>
                    <ContainerTitleText>CARROS A VENDA</ContainerTitleText>
                    <ContainerTitleLine  />
                </ContainerTitle>

                <Sales>
                    {sales.length > 0 && sales.map((sale) => {
                        return (
                            <Box key={sale.id} >
                                <BoxImage>
                                    <Image src={sale.cover} alt={sale.name} />
                                    <ImageTitle>{sale.name}</ImageTitle>
                                </BoxImage> 
                                <BoxText>
                                    <BoxButton>
                                        <ButtonTitle
                                            onClick={() => handleFocusModal(sale.id)} 
                                        >
                                            Detalhes
                                        </ButtonTitle>
                                    </BoxButton>
                                </BoxText>                                                                
                            </Box>
                        );
                    })}
                </Sales>

                {sales.length > 20 &&
                <BoxPagination>
                    <ShowButton>
                        <ShowButtonTitle>MOSTRAR MAIS</ShowButtonTitle>
                    </ShowButton>
                </BoxPagination>                
                }
            </Container>

            <ContainerModal
                projectId={idSale}
                className="ModalBg"
                status={modalStatus} 
                onClick={handleCloseModal}
            >
                    <ModalBody>
                        <SaleDetail>
                            {idSaleOne.images && 
                                <SaleImgIndex 
                                    src={idSaleOne.images[activeImg].url} 
                                    alt={idSaleOne.name}
                                />
                            }

                            {idSaleOne.images && idSaleOne.images.map((thumbImg, index ) => {
                                return (
                                    <SaleButtonThumb 
                                        key={thumbImg.id} 
                                        className={activeImg === index ? 'active' : ''} 
                                        type="button"
                                        onClick={() => handleRenderImg(index)}
                                    >
                                        <SaleButtonThumbImage 
                                            className="image-thumb"
                                            src={thumbImg.url}
                                            alt={thumbImg.name}
                                        />
                                    </SaleButtonThumb>
                                );
                            })}
                        </SaleDetail> 

                        <SaleBody>                             
                            <SaleBodyTitle>{idSaleOne.title}</SaleBodyTitle> 

                            <SaleBodyDescription>{idSaleOne.description}</SaleBodyDescription>

                            <SaleBodyPhone>Contato: {idSaleOne.phone}</SaleBodyPhone>

                            <SaleBodyPrice>
                                <strong>Valor R$. </strong>
                                {idSaleOne.price}
                            </SaleBodyPrice>
                        </SaleBody>
                    </ModalBody>
            </ContainerModal>


            <Footer /> 
        </>
    );
}

export default Sale;