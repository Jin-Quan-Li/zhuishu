import React, { Component, Fragment } from 'react';
import { ActionSheetWrapper, ActionSheet, ActionSheetItem } from './style';

class ShowActionSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            clientHeight:0
        }
        this.handleChangeItem = this.handleChangeItem.bind(this)
    }
    render() { 
        const { list, isShow } = this.props;
        return ( 
            <Fragment>
                {
                    isShow && <ActionSheetWrapper onClick={ () => this.handleChangeItem(false) } clientHeight={`${this.state.clientHeight}px`}>
                        <ActionSheet>
                            {
                                list.map((item,index) => {
                                    return <ActionSheetItem onClick={ () => this.handleChangeItem(item) } key={index}>{item.name}({item.lastChapter})</ActionSheetItem>
                                })
                            }
                        </ActionSheet>
                    </ActionSheetWrapper>
                }
            </Fragment>
        );
    }
    componentWillMount(){
        const clientHeight = document.body.clientHeight - 40;
        this.setState({
            clientHeight
        })
    }
    handleChangeItem(e){
        this.setState({
            isShow:false
        })
        this.props.onchange(e)
    }
}
 
export default ShowActionSheet;