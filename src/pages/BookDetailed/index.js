import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Head from '../../common/Head';
import Loading from '../../common/Loading';
import { actionCreators } from './store';
import { BookDetailedWrapper, Btn, BookItem, MinorItem } from './style';
import util from '../../utils/util';
import ShowActionSheet from '../../common/ShowActionSheet';
import Toast from '../../common/Toast';
import { getCollection } from '../Bookcase/store/actionCreators'

class BookDetailed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow:false
        };
        this.handleCahngeItem = this.handleCahngeItem.bind(this);
        this.handleReading = this.handleReading.bind(this);
        this.handleDdBookcase = this.handleDdBookcase.bind(this);
    }
    render() { 
        const { loading, bookDetailed, platform } = this.props;
        const text = [bookDetailed.updated,bookDetailed.wordCount,bookDetailed.minorCate].join(' | ');
        return ( 
            <Fragment>
                <Head title={ bookDetailed.title } arrow={true} styles={{position: 'fixed',width: '100%',top: '0',left: '0',zIndex:200}} />
                {
                    !loading ? <Loading /> :
                    <BookDetailedWrapper className='bookDetailed'>
                        <BookDetailedWrapper className='wrapper'>
                            <div className='detailed-left'>
                                <img src={bookDetailed.cover} alt=''/>
                            </div>
                            <div className='detailed-right'>
                                <p>{bookDetailed.title}</p>
                                <p>{bookDetailed.author}</p>
                                <p>{text}</p>
                            </div>
                        </BookDetailedWrapper>
                        <BookDetailedWrapper className='wrapper-btn'>
                            <Btn onClick={ this.handleDdBookcase } >追更新</Btn>
                            <Btn className='wrapper-btn-right' onClick={ () => this.handleReading(this.props.match.params.id) }>开始阅读</Btn>
                        </BookDetailedWrapper>
                        <BookDetailedWrapper className='book-item'>
                            <BookItem>
                                <div>追书人气</div>
                                <p>{bookDetailed.latelyFollower}</p>
                            </BookItem>
                            <BookItem>
                                <div>读者留存率</div>
                                <p>{bookDetailed.retentionRatio}</p>
                            </BookItem>
                            <BookItem>
                                <div>日更新字数</div>
                                <p>{bookDetailed.serializeWordCount}</p>
                            </BookItem>
                        </BookDetailedWrapper>
                        {
                            bookDetailed.tags.length > 0 && <BookDetailedWrapper className='book-tags'>
                                        {
                                            bookDetailed.tags.map((item,index) => {
                                                return <MinorItem key={index} background={util.rgb()}>{item}</MinorItem>
                                            })
                                        }
                                    </BookDetailedWrapper>
                        }
                        <BookDetailedWrapper className='long-intro'>{bookDetailed.longIntro}</BookDetailedWrapper>
                    </BookDetailedWrapper>
                }
                {
                    platform.length > 0 && <ShowActionSheet onchange={ this.handleCahngeItem } isShow={this.state.isShow} list={platform}/>
                }
            </Fragment>
        );
    }
    componentWillMount(){
        this.props.getHandleDetaile(this.props.match.params.id)
    }
    handleCahngeItem(e){
        this.setState({
            isShow:false
        })
        if( e ){
            this.props.history.push({ 
                pathname:`/bookContent/${e._id}`
            })
        }
    }
    handleReading(id){
        this.setState({
            isShow:true
        })
        this.props.handleReading(id)
    }
    handleDdBookcase(){
        const { bookDetailed, getCollectionList } = this.props;
        Toast.showModal({
            title:'添书',
            content:'是否将本书加入书架!',
            cancelText:'不了',
            confirmText:'加入书架',
            callback(){
                const list = localStorage.getItem('bookcase_id') ? localStorage.getItem('bookcase_id').split(",") : [];
                if(list.indexOf(bookDetailed._id) < 0 ){
                    list.push(bookDetailed._id)
                }
                localStorage.setItem('bookcase_id',list.join(","))
                getCollectionList(list).then( res => {
                    Toast.showToast({
                        text:'添加成功!',
                        duration:2000
                    })  
                })
            }
        })
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loading:state.bookDetailed.loading,
        bookDetailed:state.bookDetailed.bookDetailed,
        mixAtoc:state.bookDetailed.mixAtoc,
        platform:state.bookDetailed.platform
    }
}
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getHandleDetaile(id){
            return dispatch(actionCreators.getDetaile(id))
        },
        handleReading(id){
            return dispatch(actionCreators.getPlatform(id))
        },
        getCollectionList(list){
            return dispatch(getCollection(list))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BookDetailed);