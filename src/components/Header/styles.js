import styled from 'styled-components/macro';

export const ContainerHeader = styled.header`
    background-color: var(--brown-relative);
    position:relative;
    width: 100vw;
    height: 120px;  
    z-index:96;
    margin-top:-170px;

    @media(max-width: 768px) {
        display:none !important;
    }
`;

export const ContainerHeaderShadow = styled.div`//ficou por traz para favorecer o background do menu
    background-color: var(--brown-relative);
    background: rgb(191,135,86);
    background: linear-gradient(180deg, rgba(191,135,86,1) 75%, rgba(255,255,0,0) 100%);
    position:relative;
    width: 100vw;
    height: 170px;     
    z-index:96;

    @media(max-width: 768px) {
        display:none !important;
    }
`;
 
export const HeaderText = styled.h1`
    font-size: 0;
    box-sizing: border-box;
`;

export const HeaderGroup = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const HeaderLink = styled.div`
    display: block; 
`;

export const HeaderImage = styled.img`
    width: 200px;
    height: auto;
    margin-left:50px;
    margin-top:5px;
    position:relative;
    z-index:97;
    
`;