import styled from 'styled-components/macro';

export const ContainerHeader = styled.header`
    background-color: var(--brown-relative);
    position:relative;
    width: 100vw;
    height: 120px;  
    box-shadow: -10px 25px 25px var(--brown-relative); 
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

export const HeaderLink = styled.a`
    display: block; 
`;

export const HeaderImage = styled.img`
    width: 200px;
    height: auto;
    margin-left:50px;
    margin-top:5px;
    position:relative;
    
`;