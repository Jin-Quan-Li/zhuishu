import styled from 'styled-components';

export const PopupWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    padding-top:40px;
    background:rgba(0,0,0,0);
    z-index:200;
    overflow-y:scroll;
`

export const PopupItem = styled.div`
    width:8rem;
    height:40px;
    line-height:40px;
    padding:0 14px;
    border-bottom:1px solid #f2f2f2;
    background:#fff;
    &.popup-title {
        position: fixed;
        top: 0;
        left: 0;
    }
    span {
        position: absolute;
        right: 0.8rem;
        top: 16px;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid #000;
        border-bottom: 0;
    }
    .arrow_down {
        border-top:0;
        border-bottom: 8px solid #000;
    }
`