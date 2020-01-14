import styled from 'styled-components';

export const BookDetailedWrapper = styled.div`
    &.bookDetailed {
        padding:50px 20px 0 20px;
    }
    &.wrapper{
        display: flex;
        .detailed-left {
            width:70px;
            height:80px;
            img {
                width:100%;
                height:100%;
            }
        }
        .detailed-right{
            flex:1;
            padding:10px 0;
            margin:0 0 0 10px;
            line-height:23px;
        }
    }
    &.wrapper-btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:15px 20px;
        border-bottom: 1px solid #ddd;
    }
    &.book-item {
        display: flex;
        align-items: center;
        height:65px;
        justify-content: space-between;
        border-bottom: 1px solid #ddd;
    }
    &.long-intro {
        line-height:23px;
        padding:15px 0 0 0;
    }
    &.book-tags {
        padding:15px 0 0 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border-bottom: 1px solid #ddd;
    }
`

export const Btn = styled.button`
    flex:1;
    height:30px;
    outline: none;
    border:0;
    background:#03A9F4;
    color:#fff;
    border-radius: 4px;
    &.wrapper-btn-right {
        margin:0 0 0 25px;
    }
`

export const BookItem = styled.div`
    flex:1;
    text-align: center;
    line-height:25px;
`

export const MinorItem = styled.div`
    padding:0 10px;
    line-height:25px;
    text-align: center;
    border-radius: 3px;
    color:#fff;
    margin:0 15px 10px 0;
    background:rgba${props => props.background}
`