import styled from 'styled-components/macro';

export const MenuScroll = styled.div`
    position:fixed;
    background-color:rgba(205,133,63, 0.9);
    height: ${props => props.active === false ? 0 : 60}px;
    width: 100vw;
    top:0;
    right:0;
    left:0;
    transition: all ease .2s;
    box-shadow:-5px 0px 5px #000;
    z-index:99;
`;

export const ContainerNav = styled.div`
    display:flex;
    justify-content:space-between;    
`;

export const FloatImage = styled.div``;

export const Image = styled.img`
    width:90px;
    height:auto;
    margin-left:40px;
    margin-top:5px;
    opacity:false;
`;

export const FloatNav = styled.div`

`;