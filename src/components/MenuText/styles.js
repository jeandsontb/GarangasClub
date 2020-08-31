import styled from 'styled-components/macro';

export const ContainerNav = styled.nav`
    padding-right: 50px;
    margin-top:${props => props.marginTop !== 0 ? props.marginTop : 0}px;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
        margin-left:10%;
        padding-top:50px;
    }
`;

export const ListText = styled.a`
    text-decoration: none;
    margin-left: 5px;
    font-size: 20px;
    font-weight: 400;
    font-family: Roboto;
    color: var(--white-active);
    padding: 10px;    
    

    :hover {
        border-bottom: 4px solid var(--blue-azure);
        transition: 0.2s;
        color: var(--blue-azure);
    }
`;