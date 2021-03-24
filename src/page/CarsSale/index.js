import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import Header from '../../components/Header';
import MenuMobile from '../../components/MenuMobile';
import MenuFloat from '../../components/MenuFloat';
import Footer from '../../components/Footer';
import { Ellipsis } from 'react-awesome-spinners';
import {  
    HeadCarSale,
    Container,
    ContainerTitle,
    ContainerTitleText,
    ContainerTitleLine,
    Sales,
    Box,
    BoxFake,
    TextNotFound,
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
import LinkUrls from '../../services/ServiceUrlsPhotos';

const Sale = () => {

    const [ loading, setLoading ] = useState(false);
    const [ loadingOpen, setLoadingOpen] = useState(false);
    const [ menu, setMenu ] = useState(false);
    const [ idSale, setIdSale ] = useState(0);
    const [ modalStatus, setModalStatus ] = useState(false);
    const [ idSaleOne, setIdSaleOne ] = useState({});
    const [ activeImg, setActiveImg ] = useState(0);
    const [ dataCarSale, setDataCarSale ] = useState([]);
    const [ linkPhotosCarSale, setLinkPhotosCarSale] = useState('');//recebe apenas o link stático de services ServiceUrlsPhotos
    const [ photoThumb, setPhotoThumb] = useState('');


    useEffect(() => {
        let cancelPromise = true;
        setLoading(true);
        
        if(cancelPromise) {
            api.get('car/sale').then(resCarSale => {
                setLinkPhotosCarSale(LinkUrls());
                setDataCarSale(resCarSale.data.data);
                setLoading(false);
            });
        }

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

    useEffect(() => {
        let cancelPromise = true;
        setLoadingOpen(true);

        api.get(`car/sale/${idSale}`).then(resSaleId => { 
            if(cancelPromise) {
                setIdSaleOne(resSaleId.data.data);
                setLoadingOpen(false);
            }
        });

        return () => cancelPromise = false;
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

    const handleRenderImg = ( id, thumbImg ) => {
        setPhotoThumb(thumbImg)
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

                {loading &&
                    <Sales>
                        <BoxFake />
                        <BoxFake />
                        <BoxFake />
                        <BoxFake />
                        <BoxFake />
                    </Sales>
                }

                {!loading && dataCarSale.length === 0 &&
                    <Sales>
                        <TextNotFound >Não existe nenhum carro a venda no momento.</TextNotFound>
                    </Sales>
                }

                {!loading &&
                    <Sales>
                        {dataCarSale.length > 0 && dataCarSale.map((sale) => {
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
                }

                {dataCarSale.length > 20 &&
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
                    {loadingOpen &&
                        <Ellipsis color="#FFFFFF" />
                    }


                    {!loadingOpen && idSaleOne.length > 0 &&
                    <ModalBody>
                        <SaleDetail>
                            {idSaleOne.length > 0 && idSaleOne[0].cover !== undefined && 
                                <SaleImgIndex 
                                    src={photoThumb.length > 0 ? `${linkPhotosCarSale}${photoThumb}` : idSaleOne[0].cover} 
                                    alt="Carros a Venda"
                                />
                            }
                            

                            {idSaleOne.length > 0 && idSaleOne[0].photos.map((thumbImg, index ) => {
                                return (
                                    
                                    <SaleButtonThumb 
                                        key={index} 
                                        className={activeImg === index ? 'active' : ''} 
                                        type="button"
                                        onClick={() => handleRenderImg(index, thumbImg)}
                                    >
                                        
                                        <SaleButtonThumbImage 
                                            className="image-thumb"
                                            src={`${linkPhotosCarSale}${thumbImg}`}
                                            alt="Carros a Venda"
                                        />
                                    </SaleButtonThumb>
                                );
                            })}
                        </SaleDetail> 

                        <SaleBody>                             
                            <SaleBodyTitle>{idSaleOne.length > 0 ? idSaleOne[0].title : '' }</SaleBodyTitle> 

                            <SaleBodyDescription>{idSaleOne.length > 0 ? idSaleOne[0].description : ''}</SaleBodyDescription>

                            <SaleBodyPhone>Contato: {idSaleOne.length > 0 ? idSaleOne[0].phone : '' }</SaleBodyPhone>

                            <SaleBodyPrice>
                                <strong>Valor R$. </strong>
                                {idSaleOne.length > 0 ? idSaleOne[0].price : ''}
                            </SaleBodyPrice>
                        </SaleBody>
                    </ModalBody>
                    }
            </ContainerModal>


            <Footer /> 
        </>
    );
}

export default Sale;