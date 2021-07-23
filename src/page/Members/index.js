import React, { useState, useEffect } from 'react';
import { Ellipsis } from 'react-awesome-spinners';

 
import api from '../../services/api';
import Header from '../../components/Header';
import MenuMobile from '../../components/MenuMobile';
import MenuFloat from '../../components/MenuFloat';
import Footer from '../../components/Footer';
import LinkUrls from '../../services/ServiceUrlsPhotos';
import {  
    HeadMembers,
    Container,
    ContainerTitle,
    ContainerTitleText,
    ContainerTitleLine,
    Members,
    Box,
    BoxFake,
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
    ButtonCloseModal,
    TextButtonCloseModal,
    TextButtonCloseModalMobile
} from './styles';


const Member = () => {

    const [ loading, setLoading ] = useState(false);
    const [ loadingOpen, setLoadingOpen] = useState(false);
    const [ menu, setMenu ] = useState(false);
    const [ members, setMembers ] = useState([]);
    const [ idMember, setIdMember ] = useState(0);
    const [ modalStatus, setModalStatus ] = useState(false);
    const [ idMemberOne, setIdMemberOne ] = useState({});
    const [ activeImg, setActiveImg ] = useState(0);
    const [ linkPhotosMember, setLinkPhotosMember] = useState('');//recebe apenas o link stático de services ServiceUrlsPhotos
    const [ photoThumb, setPhotoThumb] = useState('');


    useEffect(() => {
        let cancelPromise = true;
        setLoading(true);
        api.get('member').then(resPersona => {
            if(cancelPromise) {
                setLinkPhotosMember(LinkUrls());                
                setMembers(resPersona.data.data);
                setLoading(false);
            }
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
        return () => cancelPromise = false;
    }, []);


    useEffect(() => {
        let cancelPromise = true;
        setLoadingOpen(true);

        api.get(`member/${idMember}`).then(resMemberId => { 
            if(cancelPromise) {
                setIdMemberOne(resMemberId.data.data);
                setLoadingOpen(false);
            }
        });

        return () => cancelPromise = false;
    }, [idMember]);


    const handleFocusModal = (id) => {
        setIdMember(id);
        setModalStatus(true);
    }

    const handleCloseModal = (e) => {
        if( e.target.classList.contains('ModalBg')) {
            setModalStatus(false);
            setIdMember(0);
            setIdMemberOne({});
            setPhotoThumb('');
            setActiveImg(0);
        }
    }

    const handleRenderImg = ( id, thumbImg ) => {
        setPhotoThumb(thumbImg);
        setActiveImg(id);
    }

    const handleCloseModalButton = () => {
        setModalStatus(false);
        setIdMember(0);
        setIdMemberOne({});
        setPhotoThumb('');
        setActiveImg(0);
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

                {loading &&
                    <Members>
                        <BoxFake />
                        <BoxFake />
                        <BoxFake />
                        <BoxFake />
                        <BoxFake />
                    </Members>
                }
            

                {!loading &&
                    <Members>
                        {members.length > 0 && members.map((member) => {
                            return (
                                <Box key={member.id} >
                                    <BoxImage>
                                        <Image src={member.cover} alt={member.name} />
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
                }

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
                    {loadingOpen &&
                        <Ellipsis color="#FFFFFF"/>
                    }

                    
                    {!loadingOpen && idMemberOne.length > 0 &&
                        <ModalBody>
                            <MemberDetail>
                                {idMemberOne && idMemberOne.length > 0 &&
                                    <MemberImgIndex 
                                        src={photoThumb.length > 0 ? `${linkPhotosMember}${photoThumb}` : idMemberOne[0].cover } 
                                        alt="Fotos Member"
                                    />
                                }

                                {idMemberOne.length > 0 && idMemberOne[0].photos.length > 0 && idMemberOne[0].photos.map((thumbImg, index ) => {
                                    return (
                                        <MemberButtonThumb 
                                            key={index} 
                                            className={activeImg === index ? 'active' : ''} 
                                            type="button"
                                            onClick={() => handleRenderImg(index, thumbImg)}
                                        >
                                            <MemberButtonThumbImage 
                                                className="image-thumb"
                                                src={`${linkPhotosMember}${thumbImg}`}
                                                alt="Photos Member"
                                            />
                                        </MemberButtonThumb>
                                    );
                                })}
                            </MemberDetail> 

                            <MemberBody>                             
                                <MemberBodyTitle>{idMemberOne[0].title}</MemberBodyTitle> 

                                <MemberBodyDescription>{idMemberOne[0].description}</MemberBodyDescription>

                                <MemberBodyFuture>
                                    {idMemberOne[0].name}
                                </MemberBodyFuture>
                            </MemberBody>
                            <ButtonCloseModal>
                            <TextButtonCloseModal onClick={handleCloseModalButton}>
                                FECHAR
                            </TextButtonCloseModal> 
                            <TextButtonCloseModalMobile onClick={handleCloseModalButton}>
                                X
                            </TextButtonCloseModalMobile>    
                        </ButtonCloseModal> 
                        </ModalBody>
                    }

            </ContainerModal>

            <Footer />
        </>
    );
}

export default Member;