import React from 'react';
import { Link } from 'react-router-dom';

import { 
    ContainerNav,
    ContainerUl,
    ListText 
} from './styles';

const MenuText = ({ marginTop }) => {
    return (
        <ContainerNav marginTop={marginTop} >
            <ContainerUl>
                    <Link to="/" style={{textDecoration:'none'}} ><ListText>Home</ListText></Link>
                    <Link to="/sale" style={{textDecoration:'none'}} ><ListText>Carros a venda</ListText></Link>
                    <Link to="/historic" style={{textDecoration:'none'}} ><ListText>História</ListText></Link>
                    <Link to="/members" style={{textDecoration:'none'}} ><ListText>Integrantes</ListText></Link>
                    <Link to="/partners" style={{textDecoration:'none'}} ><ListText>Parceiros</ListText></Link>
            </ContainerUl>
        </ContainerNav> 
    );
}

export default MenuText;