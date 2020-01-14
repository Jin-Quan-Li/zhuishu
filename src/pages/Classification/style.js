import styled from 'styled-components';

export const ContentWrapper = styled.div`
    padding: 40px 20px 60px 20px;
`
export const ContenNav = styled.div`
    .conten-head {
        border-bottom:1px solid #f2f2f2;
        height:50px;
        line-height:50px;
        font-size:16px;
        font-weight: bold;
    }
`
export const ContenList = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    &::after {
        content: "";
        flex:33.33% 0 0;
        margin:10px 0 0 0;
        padding:5px 0;
    }
`

export const ContenItem = styled.div`
    flex:33.33% 0 0;
    margin:10px 0 0 0;
    padding:5px 0;
    text-align: center;
    .conten-name {
        color:#000000;
        line-height:25px;
        font-size:16px;
        font-weight: bold;
    }
    .conten-num {
        line-height:25px;
        font-size:0.4rem;
        color:#95959E;
    }
`