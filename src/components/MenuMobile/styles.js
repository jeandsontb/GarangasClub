import styled from 'styled-components';

export const Container = styled.div`

    display:none;

    @media(max-width: 768px) {
        display:block;
        background-color:rgba(205,133,63, 0.9);
        box-shadow:-5px 0px 5px #000;
        height:60px;
        width:100vw;
        position: fixed;
        z-index:999;
    }
`;

export const BoxMenu = styled.div`
        display: flex;
        justify-content: space-between;
`;

export const MenuImage = styled.div``;

export const Image = styled.img`
        width:90px;
        height:auto;
        margin-left:20px;
        margin-top:5px;
`;
 
export const MenuButton = styled.div`
        width:60px;
        height:60px;
`;

export const BoxContentMenu = styled.div`
    height: ${props => props.height === true ? 300 : 0}px;
    width:100vw;
    background-color:rgba(205,133,63, 0.9);
    margin-top:-40px;
    transition: all ease 0.5s;
`;