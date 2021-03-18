import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import MenuFloat from '../../components/MenuFloat';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MenuMobile from '../../components/MenuMobile';
import Modal from '../../components/Modal';

import { 
    HeaderBackground,
    HeaderBackImage,
    HeaderOpacity,
    HomeGoupContent,
    HomeEventsTitle,
    HomeEventsBox,
    HomeContent,
    HomeFamilyBackground, 
    HomeFamily,
    HomeFamilyDescription,
    HomeFamilyDescriptionText,
    HomeFamilyText,
    HomeRestauration,
    HomeRestaurationText,
    HomeRestaurationHr,
    HomeRestaurationProjects,
    Container,
    ModalBody
} from './styles';
import './style.css';

const Home = () => {

    const ref = useRef();

    //data home
    const [ textMovie, setTextMovie ] = useState('');
    const [ urlMovie, setUrlMovie ] = useState('');
    const [ events, setEvents ] = useState([]);
    const [ projects, setProjects ] = useState([]);
    const [ idProject, setIdProject ] = useState(0);
    const [ idProjectOne, setIdProjectOne ] = useState({});

    const [ activeImg, setActiveImg ] = useState(0);
    
    const [ menu, setMenu ] = useState(false);
    const [ scrollCount, setScrollCount ] = useState(0);
    const [ modalStatus, setModalStatus ] = useState(false);
    const [ activeModal, setActiveModal ] = useState(false);
    const [ heightBox, setHeightBox ] = useState(0);
    
    
    
    useEffect(() => {
        api.get('movies').then(response => {
            setTextMovie(response.data[0].title);
            setUrlMovie(response.data[0].url);
        });

        api.get('events').then(resEvent => {
            setEvents(resEvent.data);
        });

        api.get('projects').then(resProjec => {
            setProjects(resProjec.data);
        });

        setHeightBox(ref.current.clientHeight);
    }, []);

    useEffect(() => {
        setIdProjectOne({});
        api.get(`projects/${idProject}`).then(resProjectId => {
            setIdProjectOne(resProjectId.data);
        });
    }, [idProject, modalStatus]);
    
    
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

    const url = urlMovie;    

    function getYouTubeId(youtubeURL) {
        return youtubeURL
          .replace(
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
            '$7',
          );
    } 
    

    const youTubeID = getYouTubeId(url);
    const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;
    const movieUrl = `https://www.youtube.com/embed/${youTubeID}`;
   
    const handleFocusModal = ( id ) => {
        setIdProject(id);
        setModalStatus(true);
    }
    
    const handleCloseModal = (e) => {
        if( e.target.classList.contains('ModalBg')) {
            setModalStatus(false);
            setIdProjectOne({});
            setActiveImg(0);
        }
    }

    const handleActiveModal = () => {
        setActiveModal(true);
    }

    const handleRenderImg = ( id ) => {
        setActiveImg(id);
    }    

    return (
        <> 
            <HomeFamilyBackground />


            <Header />

            {/* ################### MENU SCROLL PARA WEB ########################## */}
            <MenuFloat active={menu} />

            {/* ######################## MENU MOBILE  ############################# */}
            <MenuMobile />


            {/* ####################### CORPO DA HOME ############################# */}
            <HeaderBackground >
                <HeaderOpacity  >
                    <HeaderBackImage />

                    <div className="boxInfo">
                        <div className="boxInfoText" > 
                            <div className="boxInfoTextSvg" >                           
                                <svg width="80" height="80" viewBox="0 0 754 642" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="logo" d="M664.432 80.7791C728.84 136.887 737.933 170.355 748 210.713H540.908C540.908 203.823 519.035 157.743 495.267 139.334C432.205 90.4906 322.84 106.71 277.727 157.558C181.281 266.267 221.64 417.426 277.727 467.628C325.91 510.754 428.733 535.548 540.908 494.205V399.708H385.588V302.257H738C743.523 302.257 748 306.734 748 312.257V550.313C713.485 576.89 583.283 638 428.733 638C320.872 638 246.088 621.638 187.124 594.076C52.8353 538.732 -7.88338 383.384 5.91774 272.727C36.1186 30.5774 299.299 4 385.588 4C471.876 4 600.025 24.6713 664.432 80.7791Z" stroke="#F0FFFF" strokeWidth="20"/>
                                </svg>
                                <h1>arangas Club</h1>
                            </div>
                            <h2 >{textMovie}</h2>
                        </div>
                        <div 
                            className="boxInfoMovie" 
                            style={{backgroundImage:`url(${bgUrl})`}}
                            onClick={handleActiveModal}
                        >
                        </div>
                    </div>
                </HeaderOpacity> 
            </HeaderBackground>

            <HomeGoupContent  ref={ref} >
                <HomeContent scroll={scrollCount} >
                <div className="home-content">
                    <h1 className="content" >Calendário de eventos</h1>
                    <HomeEventsTitle scroll={scrollCount} >
                        <h2 className="events-calendary" >EVENTOS E PASSEIOS</h2>
                        <hr />
                    </HomeEventsTitle>                   
                    {events.map(event => {
                            return (
                                <HomeEventsBox key={event.id} scroll={scrollCount}>
                                    <div className="events-block">
                                        <img src={event.url} alt="Encontro" />
                                        <div>
                                            <h2>{event.title}</h2>
                                            <p>{event.description}</p>
                                            <p className="date">{event.date}</p>
                                        </div>
                                    </div>
                                </HomeEventsBox>
                            );
                        })}
                </div>
                </HomeContent>
            </HomeGoupContent>

            {/* <HomeFamilyBackground /> */}

            <HomeFamily resetContent={heightBox + (events.length * 110) } >
                <HomeFamilyText scroll={scrollCount} >Mais que amigos, uma verdadeira Família</HomeFamilyText>
            </HomeFamily>

            <HomeFamilyDescription>
                <div className="family-description">
                    <HomeFamilyDescriptionText scroll={scrollCount} >Garangas Club</HomeFamilyDescriptionText>
                </div>
            </HomeFamilyDescription>

            <HomeRestauration id="divId" >
                <div className="home-restoration">
                    <HomeRestaurationText scroll={scrollCount} >PROJETOS E RESTAURAÇÕES</HomeRestaurationText>
                    <HomeRestaurationHr scroll={scrollCount} />

                    <div className="projects" >
                        {projects.slice(0, 4).map(project => {
                            return (
                                <HomeRestaurationProjects scroll={scrollCount} >
                                    <div className="box" >
                                        <div className="box-image" >
                                            <img src={project.images[0].url} alt="Restauration" />
                                            <strong>{project.name}</strong>
                                        </div>
                                        <div className="box-text" >
                                            <h2>{project.title}</h2>
                                            <p>{project.description.substring(0, 100)}...</p>
                                            <div className="box-button" >
                                                <span 
                                                    className="details-button" 
                                                    onClick={() => handleFocusModal(project.id)}
                                                >
                                                    Detalhes
                                                </span>
                                            </div>
                                        </div>                                                                
                                    </div>
                                </HomeRestaurationProjects>  
                            );
                        })}
                    </div>

                    <div className="projects-total" >
                        <Link className="projects-button" to="/projects" style={{textDecoration:'none'}} >
                            Veja todos os Projetos
                        </Link>
                    </div>
                </div>
            </HomeRestauration>

            {activeModal &&
                <Modal url={movieUrl} closeModal={setActiveModal} />
            }
            
            <Container 
                // projectId={idProject}
                className="ModalBg"
                status={modalStatus} 
                onClick={handleCloseModal}
            >

                    {!idProjectOne &&
                        <div>
                            <p color="#FFF" >Carregando...</p>
                        </div>
                    }

                    {idProjectOne &&
                        <ModalBody>
                        <div className="projects-details" >                            
                            {idProjectOne.images &&
                                <img 
                                    className="image-featured"
                                    src={idProjectOne.images[activeImg].url} 
                                    alt={idProjectOne.name}
                                />
                            }

                            {idProjectOne.images && idProjectOne.images.map((thumbImg, index ) => {
                                return (
                                    <button 
                                        key={thumbImg.id} 
                                        className={activeImg === index ? 'active' : ''} 
                                        type="button"
                                        onClick={() => handleRenderImg(index)}
                                    >
                                        <img 
                                            className="image-thumb"
                                            src={thumbImg.url}
                                            alt={thumbImg.name}
                                        />
                                    </button>
                                );
                            })}
                        </div> 
                        
                        <div className="projects-body" >                              
                            <h2>{idProjectOne.title}</h2> 

                            <p className="project-description" >{idProjectOne.description}</p>

                            <p className="project-future-projects" >    
                                {idProjectOne.future_projects}
                            </p>
                        </div>                                              
                    </ModalBody>
                    }                    
            </Container>

            <Footer />
        </>
    );
}

export default Home;