import React from 'react';

import { 
    ContainerNav,
    ListText 
} from './styles';

const MenuText = ({ marginTop }) => {
    return (
        <ContainerNav marginTop={marginTop} >
                    <ListText href="">Home</ListText>
                    <ListText href="">Parceiros</ListText>
                    <ListText href="">História</ListText>
                    <ListText href="">Integrantes</ListText>
                    <ListText href="">Carros a venda</ListText>
        </ContainerNav>
    );
}

export default MenuText;