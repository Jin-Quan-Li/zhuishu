import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Tabs from '../../common/Tabs';
import Img from '../../common/Img';
import Head from '../../common/Head';
import { RankingWrapper, TitleWrapper, RankingWrapperItem } from './style';

class Ranking extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { list } = this.props;
        return ( 
            <RankingWrapper className='ranking-wrapper'>
                <Head title='排行' styles={{position: 'fixed',width: '100%',top: '0',left: '0'}} />
                {
                    list && list.map((item,index) => {
                        return  <RankingWrapper key={index}>
                                    <TitleWrapper>{item.title}</TitleWrapper>
                                    {
                                        item.list && item.list.map((itemName,i) => {
                                            return  <RankingWrapperItem key={i} onClick={ ()=> this.handleChangeLink(itemName._id,itemName.title) }>
                                                        <Img imageUrl='http://statics.zhuishushenqi.com/ranking-cover/142319144267827' defaultImg='http://statics.zhuishushenqi.com/ranking-cover/142319144267827' />
                                                        <span>{itemName.title}</span>
                                                    </RankingWrapperItem>
                                        })
                                    }
                                </RankingWrapper>
                    })
                }
                <Tabs activeId={3} />
            </RankingWrapper>
        );
    }
    componentWillMount(){
        this.props.handleChangeMount()
    }
    handleChangeLink(id,title){
        this.props.history.push(
            { 
                pathname: `/saidRanking/${id}`, 
                state: { 
                    title
                } 
            }
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        list: state.ranking.list
    }
}
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleChangeMount:() =>{
            return dispatch(actionCreators.getRanking())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ranking);