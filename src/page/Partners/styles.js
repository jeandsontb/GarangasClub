import styled from 'styled-components';

export const HeadPartners = styled.header`

`;

export const Container = styled.section`
    display:flex;
    flex-direction:column;
    position: relative;
    z-index:95 !important;
    width:100vw;
    height: auto;
    background-color:var(--grey-soft);
    padding-bottom:50px;
`;

export const ContainerTitle = styled.div`
    padding-top:80px; 

    @media(max-width:768px) {
        padding-top:100px;
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

