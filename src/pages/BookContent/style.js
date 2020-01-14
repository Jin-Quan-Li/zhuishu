import styled from 'styled-components';

export const ContentWrapper = styled.div`
    &.wrapper {
        min-height:${props => props.clientHeight};
        background:#DAD9D4;
        padding:40px 14px 30px 14px;
    }
    &.wrapper-btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:10px 14px 0 14px;
    }
    h3 {
        padding: 20px 0 10px 0;
        font-size:18px;
        text-align:center;
    }
    .content-item {
        font-size:15px;
        line-height:26px;
        margin:10px 0;
        text-indent:30px;
        word-break:break-all;
    }
`
export const ContentBtn = styled.button`
    background:#FFFAEE;
    outline: none;
    border: 0;
    width:30%;
    height:25px;
    border-radius: 4px;
    color:#666;
`