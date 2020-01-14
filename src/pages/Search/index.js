import React, { Component } from 'react'; 
import Tabs from '../../common/Tabs';
import HeadSearch from './HeadSearch';
import { SearchList, SearchItem } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import  Tips from '../../common/Tips';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleChangeItem = this.handleChangeItem.bind(this);
    }
    render() {
        const { list } = this.props;
        return ( 
            <div>
                <HeadSearch />
                {
                    list.length <= 0 ? <Tips /> : <SearchList>
                                                {
                                                    list.map((item,index) => {
                                                        return <SearchItem onClick={ ()=> this.handleChangeItem(item._id,item.title) } key={index} >{item.title}</SearchItem>
                                                    })
                                                }
                                            </SearchList>
                }
                <Tabs activeId={4} />
            </div>
        );
    }
    componentWillUnmount(){
        this.props.unmount()
    }
    handleChangeItem(id,title){
        this.props.history.push(
            { 
                pathname: `/bookDetailed/${id}`, 
                state: { 
                    title
                } 
            }
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    return {
        list:state.search.list
    }
}
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        unmount:() => {
            return dispatch(actionCreators.unmount())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);