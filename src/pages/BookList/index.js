import React, { Component } from 'react';
import Head from '../../common/Head';
import { BookWrapper, BookNavItem, Overflow, BookWrapperList, BookItem } from './style';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import Loading from '../../common/Loading';
import  Tips from '../../common/Tips';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {
                    name:'热门',
                    type:'hot'
                },                                                             
                {
                    name:'新书',
                    type:'new'
                },
                {
                    name:'好评',
                    type:'repulation'
                },
                {
                    name:'完结',
                    type:'over'
                },
                {
                    name:'包月',
                    type:'month'
                }
            ],
            text:{},
            type:'',
            minor:'',
            option:{}
        }
        this.booknavitem = this.booknavitem.bind(this);
        this.handleBookitem = this.handleBookitem.bind(this);
        this.handleChangMajor = this.handleChangMajor.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleClickItem = this.handleClickItem.bind(this);
    }
    booknavitem(mins){
        if( mins.length <= 0 ){
            return 
        }
        return (
            <Overflow>
                <BookWrapper className='wrapper-mins'>
                    <BookNavItem className='book-nav-all' onClick={ () => this.handleChangMajor('') }>全部</BookNavItem>
                    {
                        mins.map((item,index) => {
                            return <BookNavItem key={index} className='book-nav-item' onClick={ () => this.handleChangMajor(item) }>{item}</BookNavItem>
                        })
                    }
                </BookWrapper>
            </Overflow>
        )
    }
    // 列表
    handleBookitem(){
        const { books, loading } = this.props;
        if( !loading ){
            return <Loading />
        }
        if(books.length <= 0){
            return <Tips />
        }
        return (
            <BookWrapperList>
                {
                    books.map((item,index) => {
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
        )
    }
    render() { 
        const { list, text } = this.state;
        const { cats } = this.props;
        var catsList = []
        for( let i in cats){
            catsList.push(...cats[i])
        }
        const catsTitle = catsList.filter(item => item.major === text.name);
        const mins = catsTitle.length > 0 ? catsTitle[0].mins : [];
        return ( 
            <div>
                <Head title={text.name} arrow={true} styles={{position: 'fixed',width: '100%',top: '0',left: '0',zIndex:200}} />
                <BookWrapper className='wrapper'>
                    <BookWrapper className='wrapper-nav'>
                        {
                            list.map((item,index) => {
                                return <BookNavItem key={index} onClick={ () => this.handleChangeType(item.type) }>{item.name}</BookNavItem>
                            })
                        }
                    </BookWrapper>
                    { this.booknavitem(mins) }
                </BookWrapper>
                { this.handleBookitem() }
            </div>
        );
    }
    handleChangeType(type){
        this.setState({
            type,
            option:{
                ...this.state.option,
                type
            }
        }, () => {
            this.props.getBook(this.state.option)
        })
    }
    handleChangMajor(minor){
        this.setState({
            minor,
            option:{
                ...this.state.option,
                minor
            }
        }, () => {
            this.props.getBook(this.state.option)
        })
    }
    componentWillMount(){
        const state = this.props.history.location.state || {
            name:"玄幻",
            type:''
        };
        
        const option = {
            gender:state.type,            
            type:this.state.type || this.state.list[0].type,
            minor:this.state.major || '',
            major:state.name || '',
            start:0,
            limit:20
        }

        this.setState({
            text:state,
            option,
            major:state.name
        })
        this.props.getCatsList();
        this.props.getBook(option)
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
        cats:state.bookList.cats, //小类别
        books:state.bookList.books, //列表
        loading:state.bookList.loading
    }
}
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCatsList() {
            dispatch(actionCreators.getCatsList());
        },
        getBook:(option) => {
            dispatch(actionCreators.getBooklist(option));
        },
        getLoading:(isShow) => {
            dispatch(actionCreators.loading(isShow));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);