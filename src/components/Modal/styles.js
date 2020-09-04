import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    background-color:rgba(0,0,0, 0.5);
    position: fixed;
    z-index:9999;
    top:0;
    right:0;
    bottom:0;
    left:0; 
`;

export const Content = styled.div`
    background-color:#FFF;
    border-radius:10px;
    padding:10px;
    box-shadow: 0px 0px 2px #000;

    @media(max-width:768px) {
        padding:0;
        width:100vw;
        border-radius:0;
    }
`;

export const Player = styled.div`
    background-color:#CCC;

    iframe {
        border:none;
        width:560px;
        height:315px;
    }

    @media(max-width:768px) {
        position: relative;
        width:100%;
        padding-bottom:56.25%;

        iframe {
            position:absolute;
            width:100%;
            height:100%;
            border:none;
        }
    }
`;