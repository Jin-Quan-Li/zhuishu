import React, { Component, Fragment } from 'react';
import { TabsDecorator, TabsItem } from './style.js';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tabsList:[
                {
                    name:'书架',
                    image:require("../../assets/book.svg"),
                    id:1,
                    link:'/'
                },
                {
                    name:'分类',
                    image:require("../../assets/category.svg"),
                    id:2,
                    link:'/classification'
                },
                {
                    name:'排行',
                    image:require("../../assets/rank.svg"),
                    id:3,
                    link:'/ranking'
                },
                {
                    name:'搜索',
                    image:require("../../assets/search.svg"),
                    id:4,
                    link:'/search'
                }
            ]
        }
    }
    render() { 
        const { tabsList } = this.state;
        const { activeId } = this.props;
        return ( 
            <Fragment>
                <TabsDecorator>
                    {
                        tabsList.map( ( item, index) => {
                            return (
                                <TabsItem key={index}>
                                    <Link to={item.link}>
                                        <p className='tabs-image'>
                                            <img src={item.image} alt ='' />
                                        </p>
                                        <p className={ activeId === item.id ? 'active' : ''}>{item.name}</p>
                                    </Link>
                                </TabsItem>
                            )
                        })
                    }
                </TabsDecorator>
            </Fragment>
        );
    }
}
Tabs.propTypes = {
    activeId: PropTypes.number
};
Tabs.defaultProps = {
    activeId:1
};
export default Tabs;