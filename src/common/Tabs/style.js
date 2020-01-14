import styled from 'styled-components';


export const TabsDecorator = styled.ul`
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width:100%;
    height:55px;
    justify-content: center;
    align-items: center;
    border-top:1px solid #ddd;
    background: #fff;
`

export const TabsItem = styled.li`
    height:100%;
    flex:1;
    text-align: center;
    a {
        display: block;
        height:100%;
    }
    .tabs-image {
        color:red;
        img {
            width:30px;
            height:30px;
        }
    }
    .active {
        color:#4AA6FD;
    }
    p {
        line-height:20px;
    }
`