import styled from 'styled-components/macro';

export const HeaderBackground = styled.section`
    display:flex; 
    position:relative;
    background-image: url('/assets/fusca.png'); 
    background-size: cover;
    background-repeat:no-repeat;
    width:100vw;
    height:calc(100vh - 120px);
    z-index:95;
    `;

export const HeaderOpacity = styled.div`
    background-color:rgba(139,69,19, 0.5);
    width:100vw;
    height:calc(100vh - 120px);
`;

export const HeaderBackImage = styled.img`
`;

export const HomeGoupContent = styled.section`
    /* position:absolute; */
    position:relative;
    background-color:var(--grey-soft);
    z-index: 98;
    height:auto;
`;

export const HomeContent = styled.div`
    /* display:block; */
    /* position:relative; */
    position:relative;
    background-color:var(--grey-soft);
    width: 80%;
    height:auto;
    margin-left:10%;
    margin-top:${props => props.scroll > 190 ? -150 : 0}px;
    z-index:98 !important;
    transition:all ease .8s;
`;

export const HomeEventsTitle = styled.div`
    opacity:${props => props.scroll > 195 ? 1 : 0};
    margin-left: ${props => props.scroll > 195 ? 20 : 100}px;
    transition: all ease .5s;
`;

export const HomeEventsBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    opacity:${props => props.scroll > 195 ? 1 : 0};
    margin-left: ${props => props.scroll > 195 ? 20 : -30}px;
    margin-right: 20px;
    transition: all ease .5s;
`;
    
export const HomeFamilyBackground = styled.section`
    display:block;
    position:fixed;
    background-image: url('/assets/fundo.jpg'); 
    background-size: cover;
    background-repeat:no-repeat;
    left:0;
    top:0;
    right:0;
    bottom:0;
    z-index:0 !important;
`;

export const HomeFamily = styled.section`
    display:flex;
    align-items: center;
    justify-content:center;
    position: relative;
    z-index: 20;
    height:200px;
    background-color: rgba(0,0,0, 0.5);
`;

export const HomeFamilyText = styled.h1`
    color: var(--blue-azure);
    font-size:30px;
    font-family: Roboto;
    opacity:${props => props.scroll > 560 ? 1 : 0};
    margin-left: ${props => props.scroll > 560 ? 0 : -100 }px;
    transition: all ease .6s;
`;
export const HomeFamilyDescription = styled.section`
    display:flex;
    align-items: center;
    justify-content:center;
    position: relative;
    z-index: 20;
    height:100px;
    background-color:var(--blue-relative);
`;

export const HomeFamilyDescriptionText = styled.h1`
    font-family: Roboto;
    font-size: 35px;
    color: var(--blue-azure);
    opacity:${props => props.scroll > 640 ? 1 : 0};
    margin-right: ${props => props.scroll > 640 ? 0 : -100 }px;
    transition: all ease .6s;
`;


export const HomeRestauration = styled.section`
    display:flex;
    position: relative;
    z-index:95 !important;
    padding:20px;
    width:100vw;
    height:auto;
    background-color:var(--grey-soft);
    padding-bottom:80px;
`;

export const HomeRestaurationText = styled.h1`
    font-family: McLaren;
    color: var(--blue-strong);
    margin-bottom: 10px;
    margin-top: 40px;
    opacity:${props => props.scroll > 760 ? 1 : 0};
    margin-left: ${props => props.scroll > 760 ? 0 : 100 }px;
    transition: all ease .6s;
`;

export const HomeRestaurationHr = styled.hr`
    margin-bottom: 30px;
    border: 2px solid var(--brown-active);
    max-width: 50%;
    opacity:${props => props.scroll > 760 ? 1 : 0};
    margin-left: ${props => props.scroll > 760 ? 0 : 100 }px;
    transition: all ease .6s;
`;

export const HomeRestaurationProjects = styled.div`
    background: cadetblue;
    flex: 1;
    width: 24%;
    height:300px;
    margin-left: 2%;
    opacity:${props => props.scroll > 780 ? 1 : 0};
    margin-top: ${props => props.scroll > 840 ? 0 : 200 }px;
    transition: all ease .6s;
    border-radius:5px;
`;

export const Container = styled.div`
    display:${props => props.status ? 'flex' : 'none'};
    position:fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background-color: rgba(0,0,0, 0.7);
    z-index:900;
    
    justify-content:center;
    align-items:center;
`;

export const ModalBody = styled.div`
    padding:15px;
    background-color:var(--grey-soft);
    border-radius:20px;
    box-shadow: 0px 0px 50px #000;
    max-width:90vw;
    max-height:95vh;
    overflow:hidden;

`;