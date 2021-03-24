import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;
const SubContainer = styled.div`
    flex: 1;
    width: 24%;
    height:300px;
    margin-left: 2%;
    transition: all ease .6s;
    border-radius:5px;
    background-color:#8C2F1B;

    @media(max-width:768px) {
        width:100%;
        margin-bottom:20px;
    }
`;

const ProjectFake = () => {
    return (
        <Container >
            <SubContainer>
            </SubContainer>
        </Container>
    );


}


export default ProjectFake;