import styled from 'styled-components';
export const ToastWrapper = styled.div`
    &.showModal {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 300;
        font-size: 14px;
        text-align: center;
        background: rgba(0,0,0,0.6);
        .box {
            width: 7.5rem;
            border: 1px solid #ccc;
            border-radius: 6px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            padding-top:10px; 
        }
        .title,.content {
            line-height: 30px;
            padding: 0 10px;
        }
        .content {
            padding: 0 10px 20px 0;
        }
        .title {
            line-height: 40px;
            font-weight: bold;
            color: #000;
        }
        .toast-btn {
            display: flex;
            line-height: 45px;
            border-top: 1px solid #ddd;
        }
        .toast-btn div {
            flex:1;
        }
        .btn-confirm {
            border-left: 1px solid #ddd;
        }
    }
    &.showToast {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 300;
        font-size: 14px;
        text-align: center;
        div {  
            border-radius: 5px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.8);
            color:#fff;
            line-height:1.5;
            padding: 10px 10px;
            font-size:12px;
            max-width:8rem;
            min-width:2rem;
        }
    }
`
