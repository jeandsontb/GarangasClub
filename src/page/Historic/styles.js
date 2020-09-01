import styled from 'styled-components';

export const HeadHistoric = styled.header`
    margin:0;
    box-sizing: border-box;    
`; 

export const Content = styled.section`
    background-color:var(--grey-soft);
    width:100vw;
    height:auto;
    padding:20px 0;
`;

export const ContentBox = styled.div`
    display:flex;
    flex-direction:column;
    width:80%;
    margin-left:10%;
    margin-top:80px;
    background-color:var(--white-active);
    padding:20px;
    border-radius:10px;
    margin-bottom:50px;
`;

export const ContentImage = styled.img`
    width:100%;
    height:300px;
    object-fit:cover;
    box-shadow: 0px 5px 5px var(--blue-strong);
    border-radius:10px;

    @media(max-width:768px) {
        height:120px;
    }
`;

export const ContentBoxText = styled.div`
    margin-top:50px;
`;

export const ContentText = styled.p`
    font-size:22px;
    font-family:Roboto;
    color:var(--brown-active);
    text-align:justify;
`;