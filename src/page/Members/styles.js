import styled from 'styled-components';

export const HeadMembers = styled.header`

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

export const Members = styled.div`
    display:flex;
    flex-wrap: wrap;
    margin-left:10%;
    margin-right:10%;
    margin-top:80px;
`;

export const Box = styled.div`
    width: 19.5%;
    height: 300px;
    cursor: pointer;
    box-shadow: 0 2px 5px var(--blue-active);
    border-radius: 5px;
    margin-top:20px;
    margin-right:0.5%;
`;

export const BoxImage = styled.div`
    width: 100%;
    height: 300px;
    position: relative;
`; 


export const Image = styled.img`
    width: 100%; 
    height: 300px;
    object-fit: cover;
    position: absolute;
    z-index: 10;
    border-radius: 5px;
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

export const BoxPagination = styled.div`
    width:100%;
    height: 60px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:50px;
`;

export const ShowButton = styled.button`
    background-color:var(--blue-strong);
    border:none;
    padding:10px 50px;
    border-radius:5px;
    transform:scale(0.95);
    transition:all ease .2s;
    cursor:pointer;

    :hover {
        transform:scale(1);
        border:none;
    }
`;

export const ShowButtonTitle = styled.strong`
    color:var(--grey-soft);
    font-size:18px;
`;


    