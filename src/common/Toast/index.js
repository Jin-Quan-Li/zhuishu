import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { ToastWrapper } from './style';

//弹出确定框
class ToastShowModal extends Component {
    render() {
        const { title, content, callback, cancel, cancelText, confirmText } = this.props
        return (
            <ToastWrapper className="showModal">
                <div className="box">
                    <div className="title">{title}</div>
                    <div className="content">{content}</div>
                    <div className="toast-btn">
                        <div className="btn" onClick={ cancel }>{cancelText}</div>
                        <div className="btn-confirm" onClick={ callback }>{confirmText}</div>
                    </div>
                </div>
            </ToastWrapper>
        )
    }
}

const showModal = options => {
    let { title, content, callback, cancel, cancelText, confirmText } = options || {}
    let div = document.createElement('div')
    div.className = 'Toast-Wrapper';  
    document.body.appendChild(div)
    ReactDOM.render(React.createElement(ToastShowModal, {
        title: title || "温馨提示",
        content: content || "这是一个提示框!",
        cancelText:cancelText || "取消",
        confirmText:confirmText || "确认",
        callback: () => {
            callback && callback instanceof Function && callback()
            document.body.removeChild(div)
        },
        cancel: () => {
            cancel && cancel instanceof Function && cancel()
            document.body.removeChild(div)
        }
    }), div)
}


//提示框
class ToastShowToast extends Component {
    render() {
        const { text } = this.props
        return (
            <ToastWrapper className="showToast">
                <div>{text}</div>
            </ToastWrapper>
        )
    }
    componentWillMount(){
        const duration = this.props.duration || 2000;
        const div = this.props.div;
        var time = setTimeout(function () {
            document.body.removeChild(div);
            clearTimeout(time);
        }, duration);
    }
}

const showToast = options => {
    let { text, duration } = options || {}
    let div = document.createElement('div')
    div.className = 'Toast-Wrapper';  
    document.body.appendChild(div)
    ReactDOM.render(React.createElement(ToastShowToast, {
        text: text || "温馨提示",
        div,
        duration
    }), div)
}

export default {
    showModal,
    showToast
}