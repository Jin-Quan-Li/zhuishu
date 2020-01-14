import styled from 'styled-components';

export const HeadText = styled.div`
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height:40px;
    font-size:16px;
    background:${props => props.background};
    color:#fff;
    i {
        display: ${props => props.arrow ? 'block' : 'none'};
        position:absolute;
        top:15px;
        left:20px;
        width:10px;
        height:10px;
        border-left:2px solid #fff;
        border-bottom:2px solid #fff;
        transform:rotate(40deg);
    }
`