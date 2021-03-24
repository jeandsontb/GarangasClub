import React from 'react';
import { Link } from 'react-router-dom';

import { 
    ContainerNav,
    ContainerUl,
    ListText 
} from './styles';

const handleTopScrollClick = () => {
    window.scrollTo(0, 0);
}

const MenuText = ({ marginTop }) => {
    return (
        <ContainerNav marginTop={marginTop} >
            <ContainerUl>
                    <Link to="/" style={{textDecoration:'none'}} onClick={handleTopScrollClick} ><ListText>Home</ListText></Link>
                    <Link to="/sale" style={{textDecoration:'none'}} onClick={handleTopScrollClick} ><ListText>Carros a venda</ListText></Link>
                    <Link to="/historic" style={{textDecoration:'none'}} onClick={handleTopScrollClick} ><ListText>História</ListText></Link>
                    <Link to="/members" style={{textDecoration:'none'}} onClick={handleTopScrollClick} ><ListText>Integrantes</ListText></Link>
                    <Link to="/partners" style={{textDecoration:'none'}} onClick={handleTopScrollClick} ><ListText>Parceiros</ListText></Link>
            </ContainerUl>
        </ContainerNav> 
    );
}

export default MenuText;