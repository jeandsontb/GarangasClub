import React, { useEffect, useState } from 'react';

import MenuFloat from '../../components/MenuFloat';
import Header from '../../components/Header';

import { 
    HeaderBackground,
    HeaderBackImage,
    HeaderOpacity,
    HomeGoupContent,
    HomeContent,
    HomeFamilyBackground,
    HomeFamily,
    HomeFamilyDescription,
    HomeFamilyText,
    HomeRestauration,
    Footer
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

    const [menu, setMenu] = useState(false);
    const [ scrollCount, setScrollCount ] = useState(0);
    

    useEffect(() => {
        window.addEventListener("scroll", function (event) {
            let scroll = this.scrollY;
            
            if( scroll > 180 ){
                setMenu(true);                
            }else {
                setMenu(false);
            }

            if( scroll > 100 ) {
                setScrollCount(scroll);
            }
        });
    }, []);

    

    return (
        <> 
            <Header />

            {/* ################### MENU SCROLL PARA WEB ########################## */}
            <MenuFloat active={menu} />

            {/* ####################### CORPO DA HOME ############################# */}
            <HeaderBackground>
                <HeaderOpacity  >
                    <HeaderBackImage />

                    <div className="boxInfo">
                        <div className="boxInfoText" > 
                            <div className="boxInfoTextSvg" >                           
                                <svg width="80" height="80" viewBox="0 0 754 642" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="logo" d="M664.432 80.7791C728.84 136.887 737.933 170.355 748 210.713H540.908C540.908 203.823 519.035 157.743 495.267 139.334C432.205 90.4906 322.84 106.71 277.727 157.558C181.281 266.267 221.64 417.426 277.727 467.628C325.91 510.754 428.733 535.548 540.908 494.205V399.708H385.588V302.257H738C743.523 302.257 748 306.734 748 312.257V550.313C713.485 576.89 583.283 638 428.733 638C320.872 638 246.088 621.638 187.124 594.076C52.8353 538.732 -7.88338 383.384 5.91774 272.727C36.1186 30.5774 299.299 4 385.588 4C471.876 4 600.025 24.6713 664.432 80.7791Z" stroke="#F0FFFF" stroke-width="20"/>
                                </svg>
                                <h1>arangas Club</h1>
                            </div>
                            <h2>Confira o encontro realizado em 16/12/2020</h2>
                        </div>
                        <div 
                            className="boxInfoMovie" 
                            style={{backgroundImage:`url(${bgUrl})`}}
                            >
                        </div>
                    </div>
                </HeaderOpacity>
            </HeaderBackground>

            <HomeGoupContent>
                <HomeContent scroll={scrollCount} >
                <div className="home-content" >
                    <h1 className="content" >Calendário de eventos</h1>
                    <h2 className="events-calendary" >EVENTOS E PASSEIOS</h2>
                    <hr />
                    <div className="events-block" >
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
                    <div className="events-block" >
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
                    <div className="events-block" >
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
                </div>
                </HomeContent>
            </HomeGoupContent>

            <HomeFamilyBackground />

            <HomeFamily>
                <HomeFamilyText>Mais que amigos, uma verdadeira Família</HomeFamilyText>
            </HomeFamily>

            <HomeFamilyDescription>
                <div className="family-description">
                    <h1>Garangas Club</h1>
                </div>
            </HomeFamilyDescription>

            <HomeRestauration>
                <div className="home-restoration">
                    <h1>PROJETOS E RESTAURAÇÕES</h1>
                    <hr />

                    <div className="projects" >
                        <div className="projects-box" >

                        </div>
                        <div className="projects-box" >

                        </div>
                        <div className="projects-box" >

                        </div>
                    </div>
                </div>
            </HomeRestauration>
                    
            
            
            <Footer>
                <h1>Rodapé</h1>
            </Footer>
        </>
    );
}

export default Home;