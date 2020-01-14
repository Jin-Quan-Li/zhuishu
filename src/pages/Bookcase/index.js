import React, { Component, Fragment } from 'react'; 
import Tabs from '../../common/Tabs';
import Head from '../../common/Head';
import { BookcaseWrapper, BookcaseItem } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

var timeOutEvent=0;//定时器

class Bookcase extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleChangeItem = this.handleChangeItem.bind(this);
        this.gtouchstart = this.gtouchstart.bind(this);
        this.gtouchmove = this.gtouchmove.bind(this);
        this.gtouchend = this.gtouchend.bind(this);
    }
    render() {
        const { collectionList } = this.props;
        return ( 
            <Fragment>
                <Head title='书架' styles={{position: 'fixed',width: '100%',top: '0',left: '0',zIndex:200}} />
                <BookcaseWrapper>
                    {
                        collectionList.map((item,index) => {
                            return (
                                <BookcaseItem 
                                    key={index} 
                                    onClick={ () => this.handleChangeItem(item._id,item.title) }
                                    onTouchStart={ this.gtouchstart } 
                                    onTouchMove={ this.gtouchmove } 
                                    onTouchEnd={ this.gtouchend }
                                >
                                    <img src={item.cover} alt=''/>
                                    <div>
                                        <div>{item.title}</div>
                                        <p>{item.updated}:  {item.lastChapter}</p>
                                    </div>
                                </BookcaseItem>
                            )
                        })
                    }
                </BookcaseWrapper>
                <Tabs activeId={1} />
            </Fragment>
        );
    }
    componentWillMount(){
        const { collectionList } = this.props;
        const list = localStorage.getItem('bookcase_id') ? localStorage.getItem('bookcase_id').split(",") : [];
        collectionList.length <= 0 && this.props.getBookcase(list)
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
    //开始按
    gtouchstart(){
        let _this = this;
        timeOutEvent = setTimeout(_this.longPress(),15000000);//这里设置定时器，定义长按500毫秒触发长按事件
        return false;
    }
    //如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
    gtouchend(){
        clearTimeout(timeOutEvent);//清除定时器
        return false;
    }
    //滑动事件
    gtouchmove(){
        clearTimeout(timeOutEvent);//清除定时器
        timeOutEvent = 0;

    }
    longPress(){
        timeOutEvent = 0;
        // alert('触发了长按事件')
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        collectionList:state.bookcase.collectionList
    }
}
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getBookcase:(List) => {
            return dispatch(actionCreators.getCollection(List))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bookcase);