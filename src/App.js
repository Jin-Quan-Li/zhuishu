import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import router from './router'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() { 
		return ( 
			<div>
				<HashRouter>
					<Switch>
						{
							router.map((item,index) => {
								return (
									<Route key={index} exact path={item.path} component={item.component}/>
								)
							})
						}
					</Switch>
				</HashRouter>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	name: state.name
})
  
const mapDispatchToProps = dispatch => ({
	handleClick: () => {

	}
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
