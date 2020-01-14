import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tips extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { tips } = this.props;
        return ( 
            <div style={{textAlign:'center',lineHeight:'150px',fontSize:'14px'}}>{tips}</div>
        );
    }
}

Tips.propTypes = {
    tips: PropTypes.string
};

Tips.defaultProps = {
    tips: '暂无数据'
};
export default Tips;