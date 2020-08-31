import styled from 'styled-components';

export const Container = styled.footer`
    display:flex;
    position: relative;
    z-index:95 !important;
    width:100vw;
    height:auto;
    background-color:var(--blue-relative);
    justify-content:center;
    align-items:center;
`;

export const FooterBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:40px;
    margin-bottom:80px;
`;
   
export const FooterLogo = styled.img`
    width:80px;
    height:auto;
    justify-content:center;
`;
export const FooterDescription = styled.p`
    justify-content:center;
    align-items:center;
    font-family:Roboto;
    margin-top:10px;
    color:var(--blue-strong);
    font-size:14px;
    text-align:center;
`;

export const FooterBoxLinks = styled.div`
    display:flex;
    margin-top:40px;
    margin-bottom:20px;
    width:100%;

    @media(max-width:768px) {
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`;

export const FooterLinks = styled.span`
    cursor:pointer;
    padding:5px 10px;
    font-family:Roboto;
    font-size:18px;
    color:var(--blue-strong);
    transition:all ease 0.2s;

    :hover {
        color:var(--blue-active);        
    }
`;

export const FooterCopyright = styled.div`
    color:var(--blue-strong);
    font-family:Roboto;
    margin-top:40px;

    @media(max-width:768px) {
        font-size:14px;
        text-align:center;
    }
`;

export const FooterDesigner = styled.div`
    display:flex;
    flex:1;
    background-color:var(--blue-strong);
    width:100%;
    height:50px;
    justify-content:flex-end;
    align-items:center;
    bottom:0;
    position:absolute;
`;

export const FooterBoxAuthor = styled.div``;

export const FooterTextAuthor = styled.p`
    font-family: Roboto;
    font-size:12px;
    margin-right:40px; 
    color:var(--grey-soft);
    font-weight:100;
`;

export const FooterText = styled.p`
    font-family: Acme;
    font-size:18px;
    margin-right:40px;
    color:var(--grey-soft);

    @media(max-width:768px) {
        margin-right:10px;
    }
`;