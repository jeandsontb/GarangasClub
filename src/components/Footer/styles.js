import styled from 'styled-components';

export const Container = styled.footer`
    display:flex;
    position: relative;
    z-index:95 !important;
    width:100vw;
    height:auto;
    background-color:var(--blue-relative);
    justify-content:center;
`;

export const FooterBox = styled.div`
    margin-top:40px;
    margin-bottom:80px;
`;
   
export const FooterLogo = styled.img`
    margin-left:45%;
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
    margin-left:22%;
`;

export const FooterBoxLinks = styled.div`
    margin-top:40px;
    margin-bottom:20px;
    width:100%;
    padding-left:40px;
`;

export const FooterLinks = styled.span`
    margin-right:40px;
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
    margin-left:28%;
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
`;