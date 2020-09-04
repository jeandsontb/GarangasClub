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
`;

export const Player = styled.div`
    background-color:#CCC;
`;