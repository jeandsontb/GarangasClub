import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Ellipsis } from 'react-awesome-spinners';

import api from '../../services/api';
import MenuFloat from '../../components/MenuFloat';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MenuMobile from '../../components/MenuMobile';
import Modal from '../../components/Modal';
import LinkUrls from '../../services/ServiceUrlsPhotos';
import ProjectFake from '../../components/ProjectFake';

import { 
    HeaderBackground,
    HeaderBackImage,
    HeaderOpacity,
    HomeGoupContent,
    HomeEventsTitle,
    HomeEventsLoadingBox,
    HomeEventLoadingImg,
    HomeEventLoadingTitle,
    HomeEventLoadingText,
    HomeEventLoadingDate,
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
    const [ linkPhotosProject, setLinkPhotosProject] = useState('');//recebe apenas o link stático de services ServiceUrlsPhotos
    const [ photoThumb, setPhotoThumb] = useState('');

    const [ activeImg, setActiveImg ] = useState(0);
    
    const [ menu, setMenu ] = useState(false);
    const [ scrollCount, setScrollCount ] = useState(0);
    const [ modalStatus, setModalStatus ] = useState(false);
    const [ activeModal, setActiveModal ] = useState(false);
    const [ heightBox, setHeightBox ] = useState(0);
    const [ loadingHome, setLoadingHome] = useState(false);
    const [ loadingEvent, setLoadingEvent] = useState(false);
    const [ loadingProject, setLoadingProject] = useState(false);
    const [ loadingProjectOpen, setLoadingProjectOpen ] = useState(false);
    
    
    
    useEffect(() => {
        setLinkPhotosProject(LinkUrls());
        let cancelPromise = true;
        setLoadingHome(true);
        setLoadingEvent(true);
        setLoadingProject(true);
        api.get('link/movie').then(response => {
            if(cancelPromise) {
                setTextMovie(response.data.data[0].title);
                setUrlMovie(response.data.data[0].url);
                setLoadingHome(false);
            }
        });

        api.get('event').then(resEvent => {
            if(cancelPromise) {
                setEvents(resEvent.data.data);
                setLoadingEvent(false);
            }
        });

        api.get('project').then(resProjec => {
            if(cancelPromise) {
                setProjects(resProjec.data.data);
                setLoadingProject(false);
            }
        });

        setHeightBox(ref.current.clientHeight);
        return () => cancelPromise = false;
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setIdProjectOne({});
        setLoadingProjectOpen(true);
        let cancelPromise = true;
        api.get(`project/${idProject}`).then(resProjectId => {
            if(cancelPromise) {
                setIdProjectOne(resProjectId.data.data);
                setLoadingProjectOpen(false);
            }
        });

        return () => cancelPromise = false;
        // eslint-disable-next-line
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
        // eslint-disable-next-line
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
            setPhotoThumb('');
            setActiveImg(0);
        }
    }
    
    const handleActiveModal = () => {
        setActiveModal(true);
    }

    const handleRenderImg = ( id, photoThumb ) => {
        setPhotoThumb(photoThumb)
        setActiveImg(id);
    }    

    const handleScrollTopProjects = () => {
        window.scrollTo(0, 0);
        setLoadingProject(true);
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

                            {loadingHome &&
                                <div id="preloader" style={{marginTop: '-80px'}} ></div>
                            }

                            {!loadingHome &&
                                <h2 >{textMovie}</h2>
                            }
                        </div>
                        {loadingHome && 
                            <div 
                            className="boxInfoMovie" 
                            id="preloader"
                            >
                            </div>
                        }

                        {!loadingHome &&
                            <div 
                            className="boxInfoMovie" 
                            style={{backgroundImage:`url(${bgUrl})`}}
                            onClick={handleActiveModal}
                            >
                            <div>
                                <img alt="play" src="/assets/play.png"
                                    style={{
                                        marginLeft:'43%',
                                        marginTop:'23%',
                                        width:'60px',
                                        height:'40px'
                                    }}
                                />
                                </div>
                            </div>
                        }
                    </div>
                </HeaderOpacity> 
            </HeaderBackground>


            {/* ################################# EVENTOS ############################# */}
            <HomeGoupContent ref={ref} >
                <HomeContent scroll={scrollCount} >
                <div className="home-content">
                    <h1 className="content" >Calendário de eventos</h1>
                    <HomeEventsTitle scroll={scrollCount} >
                        <h2 className="events-calendary" >EVENTOS E PASSEIOS</h2>
                        <hr />
                    </HomeEventsTitle>  
                        {loadingEvent === true &&
                        <>
                            <HomeEventsLoadingBox>
                                <div className="events-block">
                                        <HomeEventLoadingImg></HomeEventLoadingImg>
                                        <div>
                                            <HomeEventLoadingTitle></HomeEventLoadingTitle>
                                            <HomeEventLoadingText></HomeEventLoadingText>
                                            <HomeEventLoadingText></HomeEventLoadingText>
                                            <HomeEventLoadingDate></HomeEventLoadingDate>
                                        </div>
                                    </div>
                            </HomeEventsLoadingBox>
                            <HomeEventsLoadingBox>
                            <div className="events-block">
                                    <HomeEventLoadingImg></HomeEventLoadingImg>
                                    <div>
                                        <HomeEventLoadingTitle></HomeEventLoadingTitle>
                                        <HomeEventLoadingText></HomeEventLoadingText>
                                        <HomeEventLoadingText></HomeEventLoadingText>
                                        <HomeEventLoadingDate></HomeEventLoadingDate>
                                    </div>
                                </div>
                        </HomeEventsLoadingBox>
                        </>
                        }
                        
                        {!loadingEvent && events.map(event => {
                            return (
                                <HomeEventsBox key={event.id} scroll={scrollCount}>
                                    <div className="events-block">
                                        <img src={event.img} alt="Encontro" />
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

            
            {/* ################################# BOX FAMÍLIA ############################# */}

            <HomeFamily resetContent={heightBox + (events.length * 130) } >
                <HomeFamilyText scroll={scrollCount} >Mais que amigos, uma verdadeira Família</HomeFamilyText>
            </HomeFamily>

            <HomeFamilyDescription>
                <div className="family-description">
                    <HomeFamilyDescriptionText scroll={scrollCount} >Garangas Club</HomeFamilyDescriptionText>
                </div>
            </HomeFamilyDescription>

            {/* ################################# BOX PROJETOS ############################# */}

            <HomeRestauration id="divId" >
                <div className="home-restoration">
                    <HomeRestaurationText scroll={scrollCount} >PROJETOS E RESTAURAÇÕES</HomeRestaurationText>
                    <HomeRestaurationHr scroll={scrollCount} />

                    {loadingProject &&
                        <ProjectFake scroll={scrollCount}  />
                    }

                    {!loadingProject &&
                        <div className="projects" >
                            {projects.length > 0 && projects.slice(0, 4).map(project => {
                                return (
                                    <HomeRestaurationProjects key={project.id} scroll={scrollCount} >
                                        <div className="box" >
                                            <div className="box-image" >
                                                <img src={project.cover} alt="Restauration" />
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
                    }

                    <div className="projects-total" >
                        <Link 
                            onClick={handleScrollTopProjects}
                            className="projects-button" 
                            to="/projects" 
                            style={{textDecoration:'none'}} 
                        >
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

                    {loadingProjectOpen &&
                        <Ellipsis color="#FFFFFF" />
                    }

                    {!loadingProjectOpen && idProjectOne.length > 0 &&
                        <ModalBody>
                        <div className="projects-details" >                            
                            {idProjectOne[0].photos &&
                                <img 
                                    className="image-featured"
                                    src={photoThumb.length > 0 ? `${linkPhotosProject}${photoThumb}` : idProjectOne[0].cover}  
                                    alt={idProjectOne[0].name}
                                />
                            }

                            {idProjectOne[0].photos.length > 0 && idProjectOne[0].photos.map((thumbImg, index ) => {
                                return (
                                    <button 
                                        key={index} 
                                        className={activeImg === index ? 'active' : ''} 
                                        type="button"
                                        onClick={() => handleRenderImg(index, thumbImg)}
                                    >
                                        <img 
                                            className="image-thumb"
                                            src={`${linkPhotosProject}${thumbImg}`}
                                            alt="Fotos Project"
                                        />

                                        
                                    </button>
                                );
                            })}
                        </div> 
                        <div className="projects-body" >                              
                            <h2>{idProjectOne[0].title}</h2> 

                            <p className="project-description" >{idProjectOne[0].description}</p>

                            <p className="project-future-projects" >    
                                {idProjectOne[0].futureprojects}
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