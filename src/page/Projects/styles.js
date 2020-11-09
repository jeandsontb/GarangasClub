import styled from 'styled-components';

export const HeadProjects = styled.header`

`;

export const Container = styled.section`
    z-index:95 !important;
    width:100vw;
    height: auto;
    background-color:var(--grey-soft);
    padding-bottom:50px;
`;

export const ContainerTitle = styled.div`
    padding-top:80px;    
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

export const ContainerBoxProjects = styled.div`
    padding-top:40px;
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    margin-left:10%;
    margin-right:10%;
`;

export const Box = styled.div`
    width: 19.5%;
    height: 300px;
    cursor: pointer;
    box-shadow: 0 2px 5px var(--blue-active);
    border-radius: 5px;
    margin-top:20px;
    transform:scale(0.95);
    transition:0.2s;

    :hover {
        transform: scale(1);
    }

    @media(max-width:768px) {
        width:100%;
        height:110px;   
        margin-top:10px;        
    }
`;

export const BoxImage = styled.div`
    width: 100%;
    height: 300px;
    position: relative;

    @media(max-width:768px) {
        height:110px;
    }
`; 


export const Image = styled.img`
    width: 100%; 
    height: 300px;
    object-fit: cover;
    position: absolute;
    z-index: 10;
    border-radius: 5px;

    @media(max-width:768px) {
        height:110px;
    }
`;


export const ImageTitle = styled.strong`
    background: rgba(139,69,19, 0.9);
    position: absolute;   
    padding: 5px 15px;
    color: var(--blue-azure);
    font-family: Roboto;
    font-size: 18px;
    margin-top: 15px;
    border-bottom: 1px solid var(--blue-azure);
    border-top-right-radius: 100px;
    z-index: 10;

    @media(max-width:768px) {
        font-size:16px;   
    }
`;

export const BoxText = styled.div`
    display:flex;
    background: rgba(139,69,19, 0.8);
    width: 100%;
    height: 300px;
    position: relative;
    margin-top: -300px;
    z-index: 20;
    opacity: 0;
    transition: all ease 0.4s;
    padding: 10px;
    border-radius: 5px;
    justify-content:center;
    align-items:center;

    :hover {
        opacity: 1;
        cursor: initial;
    }

    @media(max-width:768px) {
        height:110px;
        margin-top:-110px;

    }
`;

export const BoxButton = styled.div`
    display: flex;
    justify-content: center; 
    align-items:center;
    font-size: 16px;
`;

export const ButtonTitle = styled.span`
    color: var(--white-active);
    font-family: Roboto;    
    font-size: 18px;
    padding: 10px 50px;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid var(--white-active);

    :hover {
        background-color: rgba(139,69,19, 1);
        border: 1px solid rgba(255, 255, 255, 0.5);
    }
`;

export const ContainerModal = styled.div`
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

export const ProjectDetail = styled.div`
    max-width: 500px;
    max-height: 320px;
    margin-right: 20px;

    @media(max-width:768px) {
        max-width: 100%;
        max-height: auto;
        padding: 0;
        margin-right: 0;
    }
`;

export const ProjectImgIndex = styled.img`
    width: 500px;
    height: 320px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 1px 0 6px #000000;

    @media(max-width:768px) {
        width:100%;
        height: 220px;
        object-fit: cover;
        border-radius: 0;
        margin-right: 0;
        box-shadow: 1px 0 6px #000000;
        margin-bottom: -5px;
    }
`;

export const ProjetcButtonThumb = styled.button`
    background: none;
    overflow: hidden;
    outline: none;
    border: 0;
    margin-left: 4px;
    cursor: pointer;
    border-radius: 15px;
    margin-top: 10px;
    opacity: ${props => props.className === 'active' ? 1 : 0.5};
    transition: 0.2s;

    @media(max-width:768px) {
        border-radius: 8px;
    }
`;

export const ProjectButtonThumbImage = styled.img`
    width: 80px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
    border: none;

    @media(max-width:768px) {
        width: 60px;
        height: 80px;
        object-fit: cover;
        border: none;
    }
`;

export const ProjectBody = styled.div`
    background-color: rgb(245, 244, 244);
    border-radius: 15px;
    padding: 10px;
    height: auto;

    @media(max-width:768px) {
        overflow:auto;
        padding: 10px;
        margin-top: 10px;
        height: 100%;
    }
`;

export const ProjectBodyTitle = styled.h2`
    text-align: center;
    font-family: McLaren;
    color: var(--blue-strong);
    margin-top: 10px;

    @media(max-width:768px) {
        font-size: 16px;
    }
`;

export const ProjectBodyDescription = styled.p`
    font-family: Roboto;
    color: var(--brown-active);
    margin-top: 50px;

    @media(max-width:768px) {
        margin-top: 10px;
    }
`;

export const ProjectBodyFuture = styled.p`
    font-family: Roboto;
    color: var(--brown-active);
    margin-top: 20px;
`;
