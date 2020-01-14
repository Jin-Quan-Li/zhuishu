import styled from 'styled-components';

export const SearchWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height:50px;
    background:#04B1FF;
    padding:0 30px;
`

export const SearchDiv = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width:100%;
    height:30px;
    border-radius: 4px;
    background:#fff;
    img {
        position: absolute;
        top:6px;
        left:10px;
        width:20px;
        height:20px;
    }
`

export const Search = styled.input`
    height:30px;
    width: 100%;
    outline: none;
    border: 0;
    border-radius: 4px;
    background:#fff;
    padding-left:35px;
`
export const SearchList = styled.ul`
    width: 100%;
    padding:50px 0 55px 0;
    line-height:40px;
`
export const SearchItem = styled.li`
    border-bottom:1px solid #f2f2f2;
    padding:0 30px;
    font-size:14px;
`