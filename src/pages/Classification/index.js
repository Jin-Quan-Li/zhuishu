import React, { Component } from 'react'; 
import Head from '../../common/Head';
import { ContentWrapper, ContenNav, ContenList, ContenItem } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Tabs from '../../common/Tabs';
import Loading from '../../common/Loading'

class Classification extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleClickItem = this.handleClickItem.bind(this)
    }
    contenitem(props,type){
        return props.map((item,index) => {
            return (
                <ContenItem key={index} onClick={ () => this.handleClickItem(item.name,type) }>
                    <div className='conten-name'>{item.name}</div>
                    <p className='conten-num'>{item.monthlyCount}</p>
                </ContenItem>
            )
        })
    }
    render() { 
        const { list, loading } = this.props;
        return ( 
            <div>
                <Head styles={{position: 'fixed',width: '100%',top: '0',left: '0'}} />
                <ContentWrapper>
                    {
                        !loading ? <Loading /> : list.map((item,index) => {
                            return  (
                                <ContenNav key={index}>
                                    <p className='conten-head'>{item.title}</p>
                                    <ContenList>
                                        { this.contenitem(item.list,item.type) }
                                    </ContenList>
                                </ContenNav>
                            )
                        })
                    }
                </ContentWrapper>
                <Tabs activeId={2} />
            </div>
        );
    }
    componentWillMount(){
        this.props.willMoun();
    }
    handleClickItem(name,type){
        this.props.history.push(
            { 
                pathname: "/bookList", 
                state: { 
                    name,
                    type
                } 
            }
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        list: state.classconten.list,
        loading: state.classconten.loading
    }
}
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        willMoun() {
            dispatch(actionCreators.getList());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Classification);