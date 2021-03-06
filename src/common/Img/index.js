import React, { Component } from 'react';
/**
 * 图片加载失败就显示默认图片
 */
class Img extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            imageUrl: this.props.imageUrl
        };
    }

    handleImageLoaded() {
     
    }

    handleImageErrored() {
        this.setState({ 
            imageUrl: this.props.defaultImg
        });
    }

    render() {
        return (
            <img style={this.props.style}
                src={this.state.imageUrl}
                onLoad={this.handleImageLoaded.bind(this)}
                onError={this.handleImageErrored.bind(this)}
                alt=''
            />
        );
    }
}
 
export default Img;