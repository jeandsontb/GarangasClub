import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
const ContentImage = styled.div`
    width:100%;
    height:300px;
    box-shadow: 0px 5px 5px var(--blue-strong);
    border-radius:10px;
    background-color:#8C2F1B;

    @media(max-width:768px) {
        height:120px;
    }
`;
const ContentBoxText = styled.div`
    margin-top:50px;
`;
const ContentText = styled.div`
    background-color:#8C2F1B;
    width:100%;
    height:20px;
    margin-top:3px;
`;

const HistoricFake = () => {
    return (
        <Container >
            <ContentImage />
            <ContentBoxText>
                <ContentText />
                <ContentText />
                <ContentText />
                <ContentText />
                <ContentText />
                <ContentText />
                <ContentText />
                <ContentText />
                <ContentText />
                <ContentText />
            </ContentBoxText>
        </Container>
    );


}


export default HistoricFake;