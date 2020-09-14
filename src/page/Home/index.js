import React, { useState, useEffect } from 'react';

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

    const url = 'https://www.youtube.com/watch?v=VfpwNQoKhoQ&t=156s';

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

    const [ menu, setMenu ] = useState(false);
    const [ scrollCount, setScrollCount ] = useState(0);
    const [ modalStatus, setModalStatus ] = useState(false);
    const [ activeModal, setActiveModal ] = useState(false);
    const [ boxContent, setBoxContent ] = useState(0);

    useEffect(() => {
        const manangerHeightContainer = () => {
            let valor = document.getElementById('box').offsetHeight - 160;
            setBoxContent(valor);
        }

        manangerHeightContainer();
    },[]);

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


    const handleFocusModal = () => {
        setModalStatus(true);
    }

    const handleCloseModal = (e) => {
        if( e.target.classList.contains('ModalBg')) {
            setModalStatus(false);
        }
    }

    const handleActiveModal = () => {
        setActiveModal(true);
    }

    return (
        <> 
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
                            <h2>Confira o encontro realizado em 16/12/2020</h2>
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

            <HomeGoupContent id="box" >
                <HomeContent scroll={scrollCount} >
                <div className="home-content" >
                    <h1 className="content" >Calendário de eventos</h1>
                    <HomeEventsTitle scroll={scrollCount} >
                        <h2 className="events-calendary" >EVENTOS E PASSEIOS</h2>
                        <hr />
                    </HomeEventsTitle>                   
                        <HomeEventsBox scroll={scrollCount}>
                            <div className="events-block">
                                <img src={bgUrl} alt="Encontro" />
                                <div>
                                    <h2>Passeio com destino a cidade de Argoverde</h2>
                                    <p>Domingo 15/12/2020 às 08:00 horas todos os garangueiros estárão saindo
                                        da praça Mestre Dominguinhos com destino a Arcoverde com parada
                                        obrigatória em fulano de tal o maior colecionador de artigos 
                                        e peças para veículos antigos
                                    </p>
                                </div>
                            </div>
                        </HomeEventsBox>
                        <HomeEventsBox scroll={scrollCount}>
                            <div className="events-block">
                                <img src={bgUrl} alt="Encontro" />
                                <div>
                                    <h2>Passeio com destino a cidade de Argoverde</h2>
                                    <p>Domingo 15/12/2020 às 08:00 horas todos os garangueiros estárão saindo
                                        da praça Mestre Dominguinhos com destino a Arcoverde com parada
                                        obrigatória em fulano de tal o maior colecionador de artigos 
                                        e peças para veículos antigos
                                    </p>
                                </div>
                            </div>
                        </HomeEventsBox>
                        <HomeEventsBox scroll={scrollCount}>
                            <div className="events-block">
                                <img src={bgUrl} alt="Encontro" />
                                <div>
                                    <h2>Passeio com destino a cidade de Argoverde</h2>
                                    <p>Domingo 15/12/2020 às 08:00 horas todos os garangueiros estárão saindo
                                        da praça Mestre Dominguinhos com destino a Arcoverde com parada
                                        obrigatória em fulano de tal o maior colecionador de artigos 
                                        e peças para veículos antigos
                                    </p>
                                </div>
                            </div>
                        </HomeEventsBox>
                </div>
                </HomeContent>
            </HomeGoupContent>

            <HomeFamilyBackground />

            <HomeFamily resetContent={boxContent} >
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
                        <HomeRestaurationProjects scroll={scrollCount} >
                            <div className="box" >
                                <div className="box-image" >
                                    <img src="https://i.ytimg.com/vi/35BPUoqR3pE/maxresdefault.jpg" alt="Restauration" />
                                    <strong>Fusca do Neto</strong>
                                </div>
                                <div className="box-text" >
                                    <h2>Restauração completa</h2>
                                    <p>Restauração geral do fusca herois exterior e interior</p>
                                    <div className="box-button" >
                                        <span 
                                            className="details-button" 
                                            onClick={handleFocusModal}
                                        >
                                            Detalhes
                                        </span>
                                    </div>
                                </div>                                                                
                            </div>
                        </HomeRestaurationProjects> 
                        <HomeRestaurationProjects scroll={scrollCount} >
                            <div className="box" >
                                <div className="box-image" >
                                    <img src="https://i.ytimg.com/vi/F775LJib1GQ/hqdefault.jpg" alt="Restauration" />
                                    <strong>Fusca do Simão</strong>
                                </div>
                                <div className="box-text" >
                                    <h2>Serviço de funilaria e pintura</h2>
                                    <p>Restauração geral do fusca herois exterior e interior</p>
                                    <div className="box-button" >
                                        <span 
                                            className="details-button" 
                                            onClick={handleFocusModal}
                                        >
                                            Detalhes
                                        </span>
                                    </div>
                                </div>                                                                
                            </div>
                        </HomeRestaurationProjects> 
                        <HomeRestaurationProjects scroll={scrollCount} >
                            <div className="box" >
                                <div className="box-image" >
                                    <img src="https://s3.amazonaws.com/muzeez/uploads/galleries/large/galleriesFiles/T8yse8HNjJbTYS5LK-6659933ef79ee46b2a2dd4f9f43e21ed.jpg" alt="Restauration" />
                                    <strong>Fusca do Francisco</strong>
                                </div>
                                <div className="box-text" >
                                    <h2>Tapeceria completa</h2>
                                    <p>Restauração geral do fusca herois exterior e interior</p>
                                    <div className="box-button" >
                                        <span 
                                            className="details-button"
                                            onClick={handleFocusModal} 
                                        >
                                            Detalhes
                                        </span>
                                    </div>
                                </div>                                                                
                            </div>
                        </HomeRestaurationProjects> 
                    </div>
                </div>
            </HomeRestauration>

            {activeModal &&
                <Modal url={movieUrl} closeModal={setActiveModal} />
            }
            
            <Container 
                className="ModalBg"
                status={modalStatus} 
                onClick={handleCloseModal}
            >
                    <ModalBody>
                        sadf sadfsasad ad,.<br/>
                        sadf sadfsasad ad,.<br/>
                        sadf sadfsasad ad,.<br/>
                        sadf sadfsasad ad,.<br/>
                    </ModalBody>
            </Container>

            <Footer />
        </>
    );
}

export default Home;