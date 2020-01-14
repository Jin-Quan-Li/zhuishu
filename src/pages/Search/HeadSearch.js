import React, { Component } from 'react';
import { SearchWrapper, Search, SearchDiv } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class HeadSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            inputValue:''
        }
        this.handleChangInput = this.handleChangInput.bind(this)
    }
    render() {
        return ( 
            <SearchWrapper>
                <SearchDiv>
                    <img src={require('../../assets/search.svg')}  alt='' />
                    <Search placeholder='请输入小说名字' value={this.state.inputValue} onChange={ this.handleChangInput } />
                </SearchDiv>
            </SearchWrapper>
        );
    }
    handleChangInput(e){
        const value = e.target.value;
        this.setState({
            inputValue:value
        });
        this.props.getChangList(value)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getChangList:(query) => {
            return dispatch(actionCreators.getSearch(query))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeadSearch);
