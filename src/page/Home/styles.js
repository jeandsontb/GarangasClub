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
    position:absolute;
    background-color:var(--grey-soft);
    z-index: 98;
`;

export const HomeContent = styled.section`
    display:block;
    position:initial;
    background-color:var(--grey-soft);
    width: 80%;
    height:500px;
    margin-left:10%;
    margin-top:${props => props.scroll > 190 ? -150 : 0}px;
    z-index:98 !important;
    transition:all ease .8s;
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
    align-items: flex-end;
    justify-content:center;
    position: relative;
    z-index: 20;
    height:520px;
    background-color: rgba(0,0,0, 0.5);
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

export const HomeFamilyText = styled.h1`
    color: var(--blue-azure);
    font-size:30px;
    margin-bottom: 5%;
    font-family: Roboto;
`;

export const HomeRestauration = styled.section`
    display:flex;
    position: relative;
    z-index:95 !important;
    padding:20px;
    width:100vw;
    height:auto;
    background-color:var(--grey-soft);
`;

export const Footer = styled.footer`
    display:flex;
    position: relative;
    z-index:95 !important;
    display:flex;
    padding:20px;
    width:100vw;
    height:200px;
    background-color:var(--blue-relative);

`;