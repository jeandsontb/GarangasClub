import React, { useState, useEffect } from 'react';
import { Ellipsis } from 'react-awesome-spinners';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import api from '../../services/api';
import Header from '../../components/Header';
import MenuMobile from '../../components/MenuMobile';
import MenuFloat from '../../components/MenuFloat';
import Footer from '../../components/Footer';
import {  
    HeadProjects,
    Container,
    ContainerTitle,
    ContainerTitleText,
    ContainerTitleLine,
    ContainerBoxProjects,
    ImagesProject,
    Box,
    BoxFakeLoading,
    BoxImage,
    Image,
    ImageTitle,
    BoxText,
    BoxButton,
    ButtonTitle,
    ContainerModal,
    ModalBody,
    ProjectImgIndex,
    ModalBodyImagensThumb,
    ProjetcButtonThumb,
    ProjectButtonThumbImage,
    ProjectBody,
    ProjectDescription,
    ProjectBodyTitle,
    ProjectBodyDescription,
    ProjectBodyFuture,
    ButtonColorThumb,
    ButtonLeftThumb,
    ButtonRightThumb,
    ButtonCloseModal,
    TextButtonCloseModal,
    TextButtonCloseModalMobile

} from './styles';

import LinkUrls from '../../services/ServiceUrlsPhotos';


const Projects = () => {

    const [ loading, setLoading ] = useState(false);
    const [ loadingOpen, setLoadingOpen] = useState(false);
    const [ menu, setMenu ] = useState(false);
    const [ idProject, setIdProject ] = useState(0);
    const [ projects, setProjects ] = useState([]);
    const [ modalStatus, setModalStatus ] = useState(false);
    const [ idProjectOne, setIdProjectOne ] = useState({});
    const [ activeImg, setActiveImg ] = useState(0);
    const [ linkPhotosProject, setLinkPhotosProject] = useState('');//recebe apenas o link stático de services ServiceUrlsPhotos
    const [ photoThumb, setPhotoThumb] = useState('');

    useEffect(() => {
        setLinkPhotosProject(LinkUrls());
            let cancelPromise = true;
            setLoading(true);

            api.get('project').then(resProjec => {
                if(cancelPromise) {
                    setProjects(resProjec.data.data);
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

    
    useEffect(() => {
        let cancelPromise = true;
        setLoadingOpen(true);
        if(idProjectOne !== undefined) {
            api.get(`project/${idProject}`).then(resProjectId => { 
                if(cancelPromise) {
                    setIdProjectOne(resProjectId.data.data);
                    setLoadingOpen(false);
                }
            })
        }

        return () => cancelPromise = false;
        // eslint-disable-next-line
    }, [idProject]);

    const handleFocusModal = ( id ) => {
        setIdProject(id);
        setModalStatus(true);
    }

    const handleCloseModal = (e) => {
        if( e.target.classList.contains('ModalBg')) {
            setModalStatus(false);
            setIdProject(0);
            setIdProjectOne({});
            setPhotoThumb('');
            setActiveImg(0);
        }
    }

    const handleRenderImg = ( id, photoThumb ) => {
        setPhotoThumb(photoThumb)
        setActiveImg(id);
    }

    const handleCloseModalButton = () => {
        setModalStatus(false);
        setIdProject(0);
        setIdProjectOne({});
        setPhotoThumb('');
        setActiveImg(0);
    }

    return (
        <>
            <HeadProjects >
                <Header />
                <MenuFloat active={menu}/>
                <MenuMobile />
            </HeadProjects>

            <Container>
                <ContainerTitle>
                    <ContainerTitleText>PROJETOS E RESTAURAÇÕES</ContainerTitleText>
                    <ContainerTitleLine  />
                </ContainerTitle>

                {loading &&
                    <ContainerBoxProjects>
                        <BoxFakeLoading />
                        <BoxFakeLoading />
                        <BoxFakeLoading />
                        <BoxFakeLoading />
                        <BoxFakeLoading />
                    </ContainerBoxProjects>
                }

                
                {!loading &&
                    <ContainerBoxProjects>
                        {projects.length > 0  && projects.map((project) => {
                            return (
                                <Box key={project.id} >
                                    <BoxImage>
                                        <Image src={project.cover} alt={project.name} />
                                        <ImageTitle>{project.name}</ImageTitle>
                                    </BoxImage>
                                    <BoxText>
                                        <BoxButton>
                                            <ButtonTitle
                                                onClick={() => handleFocusModal(project.id)} 
                                            >
                                                Detalhess
                                            </ButtonTitle>
                                        </BoxButton>
                                    </BoxText>                                                                
                                </Box>
                            );
                        })}                                
                    </ContainerBoxProjects>
                }
            </Container>



            <ContainerModal
                projectId={idProject}
                className="ModalBg"
                status={modalStatus} 
                onClick={handleCloseModal}
            >

                    {loadingOpen && 
                        <Ellipsis color="#FFFFFF"/>
                    }


                    {!loadingOpen && idProjectOne.length > 0 &&
                    <ModalBody>
                        <ImagesProject>
                            {idProjectOne && idProjectOne.length > 0 && 
                                <ProjectImgIndex 
                                    src={photoThumb.length > 0 ? `${linkPhotosProject}${photoThumb}` : idProjectOne[0].cover} 
                                    alt="Fotos Project"
                                />
                            } 

                            <ModalBodyImagensThumb>
                                {idProjectOne.length > 0 && idProjectOne[0].photos.length > 0 &&
                                    <ScrollMenu 
                                        arrowLeft={<ButtonColorThumb><ButtonLeftThumb>{"<"}</ButtonLeftThumb></ButtonColorThumb>}
                                        arrowRight={<ButtonColorThumb><ButtonRightThumb>{">"}</ButtonRightThumb></ButtonColorThumb>}
                                        data={idProjectOne[0].photos.map((thumbImg, index ) => (
                                            <ProjetcButtonThumb 
                                                key={index} 
                                                className={activeImg === index ? 'active' : ''} 
                                                type="button"
                                                onClick={() => handleRenderImg(index, thumbImg)}
                                            >
                                                <ProjectButtonThumbImage 
                                                    className="image-thumb"
                                                    src={`${linkPhotosProject}${thumbImg}`}
                                                    alt="Fotos Project"
                                                />
                                            </ProjetcButtonThumb>
                                        ))}
                                    />                                        
                                }
                            </ModalBodyImagensThumb>
                        </ImagesProject>
                        <ProjectBody>
                            <ProjectDescription>                             
                                <ProjectBodyTitle>{idProjectOne.length > 0 ? idProjectOne[0].title : ''}</ProjectBodyTitle>
                                <ProjectBodyDescription>{idProjectOne.length > 0 ? idProjectOne[0].description : ''}</ProjectBodyDescription>

                                <ProjectBodyFuture>
                                    {idProjectOne.length > 0 ? idProjectOne[0].futureprojects : ''}
                                </ProjectBodyFuture>
                            </ProjectDescription>
                        </ProjectBody>
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

export default Projects;