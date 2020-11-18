import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import Header from '../../components/Header';
import MenuMobile from '../../components/MenuMobile';
import MenuFloat from '../../components/MenuFloat';
import Footer from '../../components/Footer';
import {  
    HeadMembers,
    Container,
    ContainerTitle,
    ContainerTitleText,
    ContainerTitleLine,
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
    ShowButtonTitle,
    ContainerModal,
    ModalBody,
    MemberDetail,
    MemberImgIndex,
    MemberButtonThumb,
    MemberButtonThumbImage,
    MemberBody,
    MemberBodyTitle,
    MemberBodyDescription,
    MemberBodyFuture,
} from './styles';


const Member = () => {

    const [ menu, setMenu ] = useState(false);
    const [ members, setMembers ] = useState([]);
    const [ idMember, setIdMember ] = useState(0);
    const [ modalStatus, setModalStatus ] = useState(false);
    const [ idMemberOne, setIdMemberOne ] = useState({});
    const [ activeImg, setActiveImg ] = useState(0);


    useEffect(() => {

        api.get('personas').then(resPersona => {
            setMembers(resPersona.data);
        });

        const manangerScrollPage = () => {
            window.addEventListener("scroll", function () {
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
        api.get(`personas/${idMember}`).then(resMemberId => { 
            setIdMemberOne(resMemberId.data);
        })
    }, [idMember]);

    
    const handleFocusModal = (id) => {
        setIdMember(id);
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
            <HeadMembers>
                <Header />
                <MenuFloat active={menu}/>
                <MenuMobile />

            </HeadMembers>

            <Container>
                <ContainerTitle>
                    <ContainerTitleText>INTEGRANTES</ContainerTitleText>
                    <ContainerTitleLine  />
                </ContainerTitle>


                <Members>
                    {members.length > 0 && members.map((member) => {
                        return (
                            <Box key={member.id} >
                                <BoxImage>
                                    <Image src={member.avatar} alt={member.name} />
                                    <ImageTitle>{member.name}</ImageTitle>
                                </BoxImage> 
                                <BoxText>
                                    <BoxButton>
                                        <ButtonTitle
                                            onClick={() => handleFocusModal(member.id)} 
                                        >
                                            Detalhes
                                        </ButtonTitle>
                                    </BoxButton>
                                </BoxText>                                                                
                            </Box>
                        );
                    })}
                </Members>

                {members.length > 20 &&
                <BoxPagination>
                    <ShowButton>
                        <ShowButtonTitle>MOSTRAR MAIS</ShowButtonTitle>
                    </ShowButton>
                </BoxPagination>                
                }
            </Container>


            <ContainerModal
                projectId={idMember}
                className="ModalBg"
                status={modalStatus} 
                onClick={handleCloseModal}
            >
                    <ModalBody>
                        <MemberDetail>
                            {idMemberOne.images && 
                                <MemberImgIndex 
                                    src={idMemberOne.images[activeImg].url} 
                                    alt={idMemberOne.name}
                                />
                            }

                            {idMemberOne.images && idMemberOne.images.map((thumbImg, index ) => {
                                return (
                                    <MemberButtonThumb 
                                        key={thumbImg.id} 
                                        className={activeImg === index ? 'active' : ''} 
                                        type="button"
                                        onClick={() => handleRenderImg(index)}
                                    >
                                        <MemberButtonThumbImage 
                                            className="image-thumb"
                                            src={thumbImg.url}
                                            alt={thumbImg.name}
                                        />
                                    </MemberButtonThumb>
                                );
                            })}
                        </MemberDetail> 

                        <MemberBody>                             
                            <MemberBodyTitle>{idMemberOne.title}</MemberBodyTitle> 

                            <MemberBodyDescription>{idMemberOne.description}</MemberBodyDescription>

                            <MemberBodyFuture>
                                <strong>Garangueiro. </strong>
                                {idMemberOne.name}
                            </MemberBodyFuture>
                        </MemberBody>
                    </ModalBody>
            </ContainerModal>

            <Footer />
        </>
    );
}

export default Member;