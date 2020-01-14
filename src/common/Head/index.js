import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HeadText } from './style';

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.goBack = this.goBack.bind(this)
    }
    render() {
        const { arrow, styles, title, background } =  this.props;
        return (
            <HeadText arrow={arrow} style={styles} background={background}>
                <i onClick={ this.goBack }></i>
                <span>{title || '分类'}</span>
            </HeadText>
        );
    }
    goBack(){
        window.history.go(-1)
    }
}

Head.propTypes = {
    arrow: PropTypes.bool,
    styles:PropTypes.object,
    background:PropTypes.string
};

Head.defaultProps = {
    arrow:false,
    styles:{},
    background:'#26A2FF'
};

export default Head;