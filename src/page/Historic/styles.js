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

export const ContainerTitle = styled.div`
    padding-top:60px; 

    @media(max-width:768px) {
        padding-top:80px;
    }   
`;

export const ContainerTitleText = styled.h1`
    font-family: McLaren;
    color: var(--blue-strong);
    transition: all ease .6s;
    margin-left:15%;

    @media(max-width:768px) {
        font-size:18px;
    }
`;

export const ContainerTitleLine = styled.hr`
    border: 2px solid var(--brown-active);
    max-width: 40%;
    transition: all ease .6s;
    margin-left:15%;
    margin-top:10px;

    @media(max-width:768px) {

    }
`;

export const BoxHistoric = styled.div`
    
`;

export const ContentBox = styled.div`
    display:flex;
    flex-direction:column;
    width:80%;
    margin-left:10%;
    margin-top:40px;
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