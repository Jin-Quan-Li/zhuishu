import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0%, 40%, 100% {
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
    } 
    20% {
        transform: scaleY(1.0);
        -webkit-transform: scaleY(1.0);
    }
`;

export const LoadingConten = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:200px;
`

export const LoadingWrapper = styled.div`
    width: 50px;
    height: 25px;
    text-align: center;
    font-size: 10px;
`

export const LoadingRect = styled.div`
    background-color: #67CF22;
    height: 100%;
    width: 3px;
    display: inline-block;
    margin:0 0.1rem 0 0;
    -webkit-animation: ${fadeIn} 1.2s infinite ease-in-out;
    animation: ${fadeIn} 1.2s infinite ease-in-out;
    &.rect2 {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
    }
    &.rect3 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
    }
    &.rect4 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
    }
    &.rect4 {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
    }
`