import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { ContentWrapper, ContentBtn } from './style';
import Head from '../../common/Head';
import Loading from '../../common/Loading';
import Toast from '../../common/Toast';
import Popup from '../../common/Popup';


class BookContent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            model:false
        };
        this.handleChangeIndexNext = this.handleChangeIndexNext.bind(this);
        this.handleChangeItem = this.handleChangeItem.bind(this);
        this.handleClickModel = this.handleClickModel.bind(this);
    }
    render() { 
        const { content, bookDetailed, loading, index, mixAtoc } = this.props;
        const { model } = this.state;
        return (  
            <ContentWrapper　className='wrapper' clientHeight={this.state.clientHeight + 'px'}>
                <Head background='#000000' title={ bookDetailed.title ||　content.title } arrow={true} styles={{position: 'fixed',width: '100%',top: '0',left: '0',zIndex:200}} />
                <h3>{content.title}</h3>
                {
                    !loading ? <Loading /> : <ContentWrapper>
                        {
                            content.contentList && content.contentList.map((item,index) => {
                                return <div key={index} className='content-item'>{item}</div>
                            })
                        }
                        {
                            content.id && <ContentWrapper className='wrapper-btn'>
                                <ContentBtn onClick={ () => this.handleChangeIndexNext(index,mixAtoc,false) }>上一章</ContentBtn>
                                <ContentBtn onClick={ this.handleClickModel }>目录</ContentBtn>
                                <ContentBtn onClick={ () => this.handleChangeIndexNext(index,mixAtoc,true) }>下一章</ContentBtn>
                            </ContentWrapper>
                        }
                    </ContentWrapper>
                }
                <Popup list={mixAtoc} model={ model } onChange={ this.handleChangeItem }/>
            </ContentWrapper>
        );
    }
    componentWillMount(){
        const clientHeight = document.body.clientHeight;
        this.setState({
            clientHeight
        })
        const id = this.props.match.params.id;
        this.props.getMixAtocContent(id).then( res => {
            this.props.handleGetContent(res[this.props.index].link)
        })
    }
    componentWillUnmount(){
        this.props.handleChangeIndex(1,false)
    }
    handleChangeIndexNext(index,mixAtoc,isNext){
        const key = isNext ? index + 1 : index - 1;
        if( key < 0 ){
            Toast.showToast({
                text:'已是第一章!',
                duration:2000
            })
            return 
        }
        if( mixAtoc && mixAtoc.length - 1 < key ){
            Toast.showToast({
                text:'已经是最后一章!',
                duration:2000
            })
            return 
        }
        this.props.handleChangeIndex(index,isNext);
        this.props.handleGetContent(mixAtoc[key].link);
    }
    handleChangeItem(e,index,isTop){
        this.setState({
            model:false
        })
        const { mixAtoc } = this.props;
        this.props.handleChangeChapter(isTop ? index - 1 : mixAtoc.length - index - 2);
        this.props.handleGetContent(e.link);
    }
    handleClickModel(){
        this.setState({
            model:true
        })
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loading:state.bookContent.loading,
        mixAtoc:state.bookContent.mixAtoc,
        content:state.bookContent.content,
        bookDetailed:state.bookDetailed.bookDetailed,
        index:state.bookContent.index
    }
}
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getMixAtocContent(id){
            return dispatch(actionCreators.getMixAtoc(id))
        },
        handleGetContent(link){
            return dispatch(actionCreators.getContent(link))
        },
        handleChangeIndex(index,isNext){
            return dispatch(actionCreators.getIndex(index,isNext))
        },
        handleChangeChapter(index){
            return dispatch(actionCreators.getIndex(index,true))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookContent);