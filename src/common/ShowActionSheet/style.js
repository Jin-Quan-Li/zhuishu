import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadenum = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

export const ActionSheetWrapper = styled.div`
    height:${props => props.clientHeight};
    background:rgba(0,0,0,0.7);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    animation:${fadenum} 0.5s ease;
`

export const ActionSheet = styled.ul`
    width:100%;
    position: absolute;
    bottom: 0;
    left: 0;
    animation:${fadenum} 0.5s ease;
`
export const ActionSheetItem = styled.li`
    width:100%;
    text-align: center;
    border-bottom:1px solid #f2f2f2;
    line-height:40px;
    padding:0 0 0 20px;
    background:#fff;
    animation:${fadenum} 0.5s ease;
`