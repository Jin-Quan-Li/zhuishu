import React, { Component, Fragment } from 'react'; 
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Head from '../../common/Head';
import { BookWrapperList, BookItem } from './style';
import  Tips from '../../common/Tips';
import Loading from '../../common/Loading';

class SaidRanking extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleClickItem = this.handleClickItem.bind(this);
    }
    render() { 
        const { ranking, loading } = this.props;
        return ( 
            <Fragment>
                <Head arrow title={ranking.title} styles={{position: 'fixed',width: '100%',top: '0',left: '0',zIndex:300}} />
                {
                     !loading ? <Loading /> : ranking.books && ranking.books.length <= 0 ? <Tips /> : <BookWrapperList>
                        {
                            ranking.books && ranking.books.map((item,index) => {
                                return <BookItem key={index} onClick={ () => this.handleClickItem(item.title,item._id) }>
                                            <div className='book-item-left'>
                                                <img src={item.cover} alt='' />
                                            </div>
                                            <div className='book-item-right'>
                                                <p className='title'>{item.title}</p>
                                                <p className='author'>{item.author} <i></i> </p>
                                                <p className='shortIntro'>{item.shortIntro}</p>
                                                <p className='sentiment'>
                                                    <span className='latelyFollower'>{item.latelyFollower}人气 <i></i> </span>
                                                    <span className='retentionRatio'>{item.retentionRatio}%读者留存</span>
                                                </p>
                                            </div>
                                        </BookItem>
                            })
                        }
                    </BookWrapperList>
                }
            </Fragment>
        );
    }
    componentWillMount(){
        this. props.getRanking(this.props.match.params.id);
    }
    handleClickItem(title,id){
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
        ranking:state.saidRanking.ranking,
        loading:state.saidRanking.loading
    }
}
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getRanking:(id) => {
            return dispatch(actionCreators.getRanking(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SaidRanking);