import styled from 'styled-components';

export const BookcaseWrapper = styled.div`
    padding:40px 0 70px 0;
`
export const BookcaseItem = styled.div`
    display: flex;
    align-items: center;
    padding:0 14px;
    margin:15px 0 0 0;
    line-height:25px;
    font-size:16px;
    img {
        flex: 70px 0 0;
        height: 80px;
    }
    > div {
        flex:1;
        margin-left:14px;
        div {
            font-weight: bold;
        }
        p {
            color:#666;
            font-size:13px;
        }
    }
`