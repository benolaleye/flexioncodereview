import styled from 'styled-components';

export const CustomButton = styled.button`
    width: 100%;
    background: linear-gradient(#dc7633 50%, #d35400 50%) !important;
    color: #fff;
    border-radius: 5px;
    height: 50px;
    outline: none;
    border: none;
    font-size: 16px;
    cursor: pointer;

    &:disabled {
        background-color: #5dade2;
    }
`;
