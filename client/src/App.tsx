import React from 'react';
import { HomePage } from './pages/home/HomePage';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 30px;
    }
`;

export const App = () => {
    return (
        <StyleWrapper>
            <HomePage />
        </StyleWrapper>
    );
};

export default App;
