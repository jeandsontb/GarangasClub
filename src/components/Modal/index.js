import React from 'react';
import {
    Container,
    Content,
    Player
} from './styles';

export default ({ url, closeModal }) => {

    const handleModalClose = (e) => {
        if(e.target.classList.contains('ModalContent')) {
            closeModal(false);
        }
    }

    return (
        <Container className="ModalContent" onClick={handleModalClose} >
            <Content> 
                <Player >
                    <iframe src = {url} title={url} >                            
                    </iframe> 
                </Player>
            </Content>
        </Container>
    );
}