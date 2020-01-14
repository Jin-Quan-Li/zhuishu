import React, { Component, Fragment } from 'react';
import { PopupWrapper, PopupItem } from './style';
import PropTypes from 'prop-types';

class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[],
            isTop:true,
            model:false
        }
        this.handleChangeArrow = this.handleChangeArrow.bind(this);
        this.handleDisappear = this.handleDisappear.bind(this);
    }
    render() { 
        const { isTop, list, model } = this.state;
        const { onChange } = this.props;
        return ( 
            <Fragment>
                {
                    !!model && <PopupWrapper onClick={ this.handleDisappear }>
                        <PopupItem className='popup-title'>元尊:目录 <span className={isTop ? '' : 'arrow_down'} onClick={ this.handleChangeArrow }></span> </PopupItem>
                        {
                            list.map((item,index) => {
                                return <PopupItem key={index} onClick={ () => onChange(item,index,isTop) }>{item.title}</PopupItem>
                            })
                        }
                    </PopupWrapper>
                }
            </Fragment>
        );
    }
    componentWillReceiveProps(props){
        const { list, model } = props;
        this.setState({
            list,
            model,
            isTop:true
        })
    }
    handleChangeArrow(e){
        const list = [...this.state.list].reverse();
        this.setState({
            list,
            isTop:!this.state.isTop
        })
        e.stopPropagation()
    }
    handleDisappear(){
        this.setState({
            model:false
        })
    }
}

Popup.propTypes = {
    onChange: PropTypes.func
};

Popup.defaultProps = {
    onChange:() => {

    }
};
export default Popup;