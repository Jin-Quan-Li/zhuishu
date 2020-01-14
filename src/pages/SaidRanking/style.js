import styled from 'styled-components';

export const BookWrapperList = styled.ul`
    padding:45px 20px 10px 20px;
    background:#F2F2F2;
`
export const BookItem = styled.li`
    display: flex;
    border-bottom:1px solid #ddd;
    padding:10px 0;
    .book-item-left {
        flex:70px 0 0;
        height:80px;
        img {
            width:100%;
            height:100%;
        }
    }
    .book-item-right {
        flex:1;
        line-height:20px;
        padding:0 10px;
        .title {
            font-weight: bold;
        }
        .author {
            color:#666;
            font-size:12px;
            i {
                display: inline-block;
                width:1px;
                height:10px;
                background:#666;
            }
        }
        .shortIntro {
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            width: 6.5rem;
            flex-shrink:0;
            color:#666;
            font-size:12px;
        }
        .sentiment {
            span {
                font-size:12px;
                color:#000;
            }
            .latelyFollower {
                position: relative;
                top: 0;
                left: 0;
                i {
                    display: inline-block;
                    width:1px;
                    height:10px;
                    margin:0 2px;
                    background:#000;
                }
            }
        }
    }
`