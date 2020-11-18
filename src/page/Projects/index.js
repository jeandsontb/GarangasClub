import React, { useState, useEffect } from 'react';

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
    Box,
    BoxImage,
    Image,
    ImageTitle,
    BoxText,
    BoxButton,
    ButtonTitle,
    ContainerModal,
    ModalBody,
    ProjectDetail,
    ProjectImgIndex,
    ProjetcButtonThumb,
    ProjectButtonThumbImage,
    ProjectBody,
    ProjectBodyTitle,
    ProjectBodyDescription,
    ProjectBodyFuture,
} from './styles';


const Projects = () => {

    const [ menu, setMenu ] = useState(false);
    const [ idProject, setIdProject ] = useState(0);
    const [ projects, setProjects ] = useState([]);
    const [ modalStatus, setModalStatus ] = useState(false);
    const [ idProjectOne, setIdProjectOne ] = useState({});
    const [ activeImg, setActiveImg ] = useState(0);

    useEffect(() => {

        api.get('projects').then(resProjec => {
            setProjects(resProjec.data);
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
    }, []);

    useEffect(() => {
        api.get(`projects/${idProject}`).then(resProjectId => { 
            setIdProjectOne(resProjectId.data);
        })
    }, [idProject]);

    const handleFocusModal = ( id ) => {
        setIdProject(id);
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

                <ContainerBoxProjects>

                    {projects && projects.map((project) => {
                        return (
                            <Box key={project.id} >
                                <BoxImage>
                                    <Image src={project.images[0].url} alt={project.name} />
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
            </Container>



            <ContainerModal
                projectId={idProject}
                className="ModalBg"
                status={modalStatus} 
                onClick={handleCloseModal}
            >
                    <ModalBody>
                        <ProjectDetail>
                            {idProjectOne.images && 
                                <ProjectImgIndex 
                                    src={idProjectOne.images[activeImg].url} 
                                    alt={idProjectOne.name}
                                />
                            }

                            {idProjectOne.images && idProjectOne.images.map((thumbImg, index ) => {
                                return (
                                    <ProjetcButtonThumb 
                                        key={thumbImg.id} 
                                        className={activeImg === index ? 'active' : ''} 
                                        type="button"
                                        onClick={() => handleRenderImg(index)}
                                    >
                                        <ProjectButtonThumbImage 
                                            className="image-thumb"
                                            src={thumbImg.url}
                                            alt={thumbImg.name}
                                        />
                                    </ProjetcButtonThumb>
                                );
                            })}
                        </ProjectDetail> 

                        <ProjectBody>                             
                            <ProjectBodyTitle>{idProjectOne.title}</ProjectBodyTitle> 

                            <ProjectBodyDescription>{idProjectOne.description}</ProjectBodyDescription>

                            <ProjectBodyFuture>
                                <strong>Melhoramentos futuros. </strong>
                                {idProjectOne.future_projects}
                            </ProjectBodyFuture>
                        </ProjectBody>
                    </ModalBody>
            </ContainerModal>


            <Footer />
        </>
    );
}

export default Projects;