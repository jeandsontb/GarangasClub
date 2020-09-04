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
                <Player>
                    <iframe 
                        width="560" 
                        height="315" 
                        src = {url}
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>                            
                    </iframe>
                </Player>
            </Content>
        </Container>
    );
}