import styled from 'styled-components/macro';

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

export const HeaderBackground = styled.section`
    display:flex; 
    position:relative;
    background-image: url('/assets/fusca.png'); 
    background-size: cover;
    background-repeat:no-repeat;
    width:100vw;
    height:calc(100vh - 120px);
    z-index:95;

    @media(max-width: 768px) { 
        height:100vh;
    }
`;

export const HeaderOpacity = styled.div`
    background-color:rgba(139,69,19, 0.5);
    width:100%;
    height:calc(100vh - 120px);

    @media(max-width: 768px) {
        height:100vh;
    }
`;

export const HeaderBackImage = styled.img`
`;

export const HomeGoupContent = styled.section`
    position:absolute;
    background-color:var(--grey-soft);
    z-index: 98;
    padding-bottom:50px;
    width: 100vw !important;
`;

export const HomeContent = styled.div`
    position:relative;
    background-color:var(--grey-soft);
    width: 80%;
    margin-left:10%; 
    margin-top:${props => props.scroll > 190 ? -150 : 0}px;
    z-index:98 !important;
    transition:all ease .8s; 

    @media(max-width:768px) {
        margin-top:${props => props.scroll > 120 ? -150 : 0}px;
    }
`;

export const HomeEventsTitle = styled.div`
    opacity:${props => props.scroll > 195 ? 1 : 0};
    margin-left: ${props => props.scroll > 195 ? 20 : 100}px;
    transition: all ease .5s;

    @media(max-width:768px) {
        margin-left:${props => props.scroll > 150 ? 20 : 100}px;
    }
`;

export const HomeEventsBox = styled.div`
    display: flex;
    align-items: center;
    opacity:${props => props.scroll > 195 ? 1 : 0};
    margin-left: ${props => props.scroll > 195 ? 20 : -30}px;
    margin-right: 20px;
    transform:scale(0.95);
    transition: all ease .2s;
    cursor: grab;

    :hover {
        transform:scale(1);
    }

    @media(max-width:768px) {
        margin-left: ${props => props.scroll > 150 ? 20 : -30}px;
    }
`;

export const HomeEventsLoadingBox = styled.div`
    @media(max-width:768px) {
        margin-left: 25px;
    }
`;

export const HomeEventLoadingImg = styled.div`
    width:200px;
    height:120px;
    background-color:#8C2F1B;
    margin-left:50px;
    border-radius:5px;

    @media(max-width:768px) {
        margin-left: 0;
    }
`;

export const HomeEventLoadingTitle = styled.div`
    width:250px; 
    height:30px; 
    background-color:#8C2F1B;
    margin-left:15px;
    margin-top:15px;

    @media(max-width:768px) {
        margin-left: 0;
        width:150px;
        margin-top:10px;
    }
`;

export const HomeEventLoadingText = styled.div`
    width:300px;
    height:15px;
    background-color:#8C2F1B;
    margin-left:15px;
    margin-top:5px;

    @media(max-width:768px) {
        margin-left: 0;
        margin-top:5px;
        height: 4px;
        width:150px;
    }
`;
    
export const HomeEventLoadingDate = styled.div`
    width:100px;
    height:20px;
    background-color:#8C2F1B;
    margin-left:15px;
    margin-top:8px;

    @media(max-width:768px) {
        margin-left: 0;
        margin-top:5px;
        height: 12px;
        width:100px;
    }
`;
    
// export const HomeFamilyBackground = styled.section`
//     display:block;
//     position:fixed;
//     background-image: url('/assets/fundo.jpg'); 
//     background-size: cover;
//     background-repeat:no-repeat;
//     left:0;
//     top:0;
//     right:0;
//     bottom:0;
//     z-index:0 !important;
// `;

export const HomeFamily = styled.section`
    display:flex;
    align-items: center;
    justify-content:center;
    position: relative;
    z-index: 95;
    height:200px; /// meche aqui para tirar a div fosca do codigo
    background-color: rgba(0,0,0, 0.5);
    width:100vw !important;
    margin-top:${props => props.resetContent - 150}px;

    @media(max-width:768px) {
        margin-top:${props => props.resetContent + 300}px;
    }    
`;

export const HomeFamilyText = styled.h1`
    color: var(--blue-azure);
    font-size:30px;
    font-family: Roboto;
    opacity:${props => props.scroll > 560 ? 1 : 0};
    margin-left: ${props => props.scroll > 560 ? 0 : -100 }px;
    transition: all ease .6s;


    @media(max-width:768px) {
        opacity:${props => props.scroll > 700 ? 1 : 0};
        margin-left: ${props => props.scroll > 700 ? 0 : -100 }px;
        font-size:18px;
        text-align:center;
        margin-top:10px;
    } 
`;
export const HomeFamilyDescription = styled.section`
    display:flex;
    align-items: center;
    justify-content:center;
    position: relative;
    z-index: 20;
    height:100px;
    width:100vw !important;
    background-color:var(--blue-relative);
`;

export const HomeFamilyDescriptionText = styled.h1`
    font-family: Roboto;
    font-size: 35px;
    color: var(--blue-azure);
    opacity:${props => props.scroll > 640 ? 1 : 0};
    margin-right: ${props => props.scroll > 640 ? 0 : -100 }px;
    transition: all ease .6s;

    @media(max-width:768px) {
        opacity:${props => props.scroll > 750 ? 1 : 0};
        margin-right: ${props => props.scroll > 750 ? 0 : -100 }px;
    }
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

    @media(max-width:768px) {
        opacity:${props => props.scroll > 850 ? 1 : 0};
        margin-left: ${props => props.scroll > 850 ? 0 : 100 }px;
        font-size:18px;
    }
`;

export const HomeRestaurationHr = styled.hr`
    margin-bottom: 30px;
    border: 2px solid var(--brown-active);
    max-width: 50%;
    opacity:${props => props.scroll > 760 ? 1 : 0};
    margin-left: ${props => props.scroll > 760 ? 0 : 100 }px;
    transition: all ease .6s;

    @media(max-width:768px) {
        opacity:${props => props.scroll > 900 ? 1 : 0};
        margin-left: ${props => props.scroll > 900 ? 0 : 100 }px;
        font-size:18px;
    }
`;

export const HomeRestaurationProjects = styled.div`
    flex: 1;
    width: 24%;
    height:300px;
    margin-left: 2%;
    opacity:${props => props.scroll > 780 ? 1 : 0};
    margin-top: ${props => props.scroll > 840 ? 0 : 200 }px;
    transition: all ease .6s;
    border-radius:5px;

    @media(max-width:768px) {
        opacity:${props => props.scroll > 1000 ? 1 : 0};
        margin-top: ${props => props.scroll > 1000 ? 0 : 200 }px;
        width:100%;
        margin-bottom:20px;
    }
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

    @media(max-width:768px) {
        margin:0;
        padding:0;
        z-index:99999999;
        align-items:unset;
        justify-content:center;
        width:100vw;
    }
`;

export const ModalBody = styled.div`
    display: flex;
    flex-direction:row;
    padding:15px;
    background-color:var(--grey-soft);
    border-radius:20px;
    box-shadow: 0px 0px 50px #000;
    max-width:90vw;
    max-height:95vh;
    overflow:hidden;
    padding-bottom: 150px;

    @media(max-width:768px) {
        flex-direction:column;
        padding:0;
        width: 100vw;
        max-height:80vh;
        min-height:60vh;
        margin:0;
        align-items:unset;
        border-top-left-radius:0;
        border-top-right-radius:0;
    }
`;