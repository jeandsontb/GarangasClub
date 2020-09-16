import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import MenuMobile from '../../components/MenuMobile';
import MenuFloat from '../../components/MenuFloat';
import Footer from '../../components/Footer';
import {  
    HeadMembers,
    Container,
    Members,
    Box,
    BoxImage,
    Image,
    ImageTitle,
    BoxText,
    BoxButton,
    ButtonTitle,
    BoxPagination,
    ShowButton,
    ShowButtonTitle
} from './styles';


const Member = () => {

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
            <HeadMembers>
                <Header />
                <MenuFloat active={menu}/>
                <MenuMobile />

            </HeadMembers>

            <Container>
                <Members>
                    <Box>
                        <BoxImage>
                            <Image src="https://s3.amazonaws.com/muzeez/uploads/galleries/large/galleriesFiles/T8yse8HNjJbTYS5LK-6659933ef79ee46b2a2dd4f9f43e21ed.jpg" alt="Restauration" />
                            <ImageTitle>Guilherme</ImageTitle>
                        </BoxImage>
                        <BoxText>
                            <BoxButton>
                                <ButtonTitle
                                    onClick={() => {}} 
                                >
                                    Detalhes
                                </ButtonTitle>
                            </BoxButton>
                        </BoxText>                                                                
                    </Box>

                    <Box>
                        <BoxImage>
                            <Image src="https://s3.amazonaws.com/muzeez/uploads/galleries/large/galleriesFiles/T8yse8HNjJbTYS5LK-6659933ef79ee46b2a2dd4f9f43e21ed.jpg" alt="Restauration" />
                            <ImageTitle>Guilherme</ImageTitle>
                        </BoxImage>
                        <BoxText>
                            <BoxButton>
                                <ButtonTitle
                                    onClick={() => {}} 
                                >
                                    Detalhes
                                </ButtonTitle>
                            </BoxButton>
                        </BoxText>                                                                
                    </Box>

                    <Box>
                        <BoxImage>
                            <Image src="https://s3.amazonaws.com/muzeez/uploads/galleries/large/galleriesFiles/T8yse8HNjJbTYS5LK-6659933ef79ee46b2a2dd4f9f43e21ed.jpg" alt="Restauration" />
                            <ImageTitle>Guilherme</ImageTitle>
                        </BoxImage>
                        <BoxText>
                            <BoxButton>
                                <ButtonTitle
                                    onClick={() => {}} 
                                >
                                    Detalhes
                                </ButtonTitle>
                            </BoxButton>
                        </BoxText>                                                                
                    </Box>

                    <Box>
                        <BoxImage>
                            <Image src="https://s3.amazonaws.com/muzeez/uploads/galleries/large/galleriesFiles/T8yse8HNjJbTYS5LK-6659933ef79ee46b2a2dd4f9f43e21ed.jpg" alt="Restauration" />
                            <ImageTitle>Guilherme</ImageTitle>
                        </BoxImage>
                        <BoxText>
                            <BoxButton>
                                <ButtonTitle
                                    onClick={() => {}} 
                                >
                                    Detalhes
                                </ButtonTitle>
                            </BoxButton>
                        </BoxText>                                                                
                    </Box>

                    <Box>
                        <BoxImage>
                            <Image src="https://s3.amazonaws.com/muzeez/uploads/galleries/large/galleriesFiles/T8yse8HNjJbTYS5LK-6659933ef79ee46b2a2dd4f9f43e21ed.jpg" alt="Restauration" />
                            <ImageTitle>Guilherme</ImageTitle>
                        </BoxImage>
                        <BoxText>
                            <BoxButton>
                                <ButtonTitle
                                    onClick={() => {}} 
                                >
                                    Detalhes
                                </ButtonTitle>
                            </BoxButton>
                        </BoxText>                                                                
                    </Box>

                    <Box>
                        <BoxImage>
                            <Image src="https://s3.amazonaws.com/muzeez/uploads/galleries/large/galleriesFiles/T8yse8HNjJbTYS5LK-6659933ef79ee46b2a2dd4f9f43e21ed.jpg" alt="Restauration" />
                            <ImageTitle>Guilherme</ImageTitle>
                        </BoxImage>
                        <BoxText>
                            <BoxButton>
                                <ButtonTitle
                                    onClick={() => {}} 
                                >
                                    Detalhes
                                </ButtonTitle>
                            </BoxButton>
                        </BoxText>                                                                
                    </Box>

                    <Box>
                        <BoxImage>
                            <Image src="https://s3.amazonaws.com/muzeez/uploads/galleries/large/galleriesFiles/T8yse8HNjJbTYS5LK-6659933ef79ee46b2a2dd4f9f43e21ed.jpg" alt="Restauration" />
                            <ImageTitle>Guilherme</ImageTitle>
                        </BoxImage>
                        <BoxText>
                            <BoxButton>
                                <ButtonTitle
                                    onClick={() => {}} 
                                >
                                    Detalhes
                                </ButtonTitle>
                            </BoxButton>
                        </BoxText>                                                                
                    </Box>

                    <Box>
                        <BoxImage>
                            <Image src="https://s3.amazonaws.com/muzeez/uploads/galleries/large/galleriesFiles/T8yse8HNjJbTYS5LK-6659933ef79ee46b2a2dd4f9f43e21ed.jpg" alt="Restauration" />
                            <ImageTitle>Guilherme</ImageTitle>
                        </BoxImage>
                        <BoxText>
                            <BoxButton>
                                <ButtonTitle
                                    onClick={() => {}} 
                                >
                                    Detalhes
                                </ButtonTitle>
                            </BoxButton>
                        </BoxText>                                                                
                    </Box>

                    <Box>
                        <BoxImage>
                            <Image src="https://s3.amazonaws.com/muzeez/uploads/galleries/large/galleriesFiles/T8yse8HNjJbTYS5LK-6659933ef79ee46b2a2dd4f9f43e21ed.jpg" alt="Restauration" />
                            <ImageTitle>Guilherme</ImageTitle>
                        </BoxImage>
                        <BoxText>
                            <BoxButton>
                                <ButtonTitle
                                    onClick={() => {}} 
                                >
                                    Detalhes
                                </ButtonTitle>
                            </BoxButton>
                        </BoxText>                                                                
                    </Box>

                    <Box>
                        <BoxImage>
                            <Image src="https://s3.amazonaws.com/muzeez/uploads/galleries/large/galleriesFiles/T8yse8HNjJbTYS5LK-6659933ef79ee46b2a2dd4f9f43e21ed.jpg" alt="Restauration" />
                            <ImageTitle>Guilherme</ImageTitle>
                        </BoxImage>
                        <BoxText>
                            <BoxButton>
                                <ButtonTitle
                                    onClick={() => {}} 
                                >
                                    Detalhes
                                </ButtonTitle>
                            </BoxButton>
                        </BoxText>                                                                
                    </Box>

                    <Box>
                        <BoxImage>
                            <Image src="https://s3.amazonaws.com/muzeez/uploads/galleries/large/galleriesFiles/T8yse8HNjJbTYS5LK-6659933ef79ee46b2a2dd4f9f43e21ed.jpg" alt="Restauration" />
                            <ImageTitle>Guilherme</ImageTitle>
                        </BoxImage>
                        <BoxText>
                            <BoxButton>
                                <ButtonTitle
                                    onClick={() => {}} 
                                >
                                    Detalhes
                                </ButtonTitle>
                            </BoxButton>
                        </BoxText>                                                                
                    </Box>

                    <Box>
                        <BoxImage>
                            <Image src="https://s3.amazonaws.com/muzeez/uploads/galleries/large/galleriesFiles/T8yse8HNjJbTYS5LK-6659933ef79ee46b2a2dd4f9f43e21ed.jpg" alt="Restauration" />
                            <ImageTitle>Guilherme</ImageTitle>
                        </BoxImage>
                        <BoxText>
                            <BoxButton>
                                <ButtonTitle
                                    onClick={() => {}} 
                                >
                                    Detalhes
                                </ButtonTitle>
                            </BoxButton>
                        </BoxText>                                                                
                    </Box>

                    <Box>
                        <BoxImage>
                            <Image src="https://s3.amazonaws.com/muzeez/uploads/galleries/large/galleriesFiles/T8yse8HNjJbTYS5LK-6659933ef79ee46b2a2dd4f9f43e21ed.jpg" alt="Restauration" />
                            <ImageTitle>Guilherme</ImageTitle>
                        </BoxImage>
                        <BoxText>
                            <BoxButton>
                                <ButtonTitle
                                    onClick={() => {}} 
                                >
                                    Detalhes
                                </ButtonTitle>
                            </BoxButton>
                        </BoxText>                                                                
                    </Box>
                </Members>

                <BoxPagination>
                    <ShowButton>
                        <ShowButtonTitle>MOSTRAR MAIS</ShowButtonTitle>
                    </ShowButton>
                </BoxPagination>
            </Container>

            <Footer />
        </>
    );
}

export default Member;