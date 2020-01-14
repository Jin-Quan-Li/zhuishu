import React, { Component } from 'react';
import { LoadingConten, LoadingWrapper, LoadingRect} from './style'

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <LoadingConten>
                <LoadingWrapper className="spinner">
                    <LoadingRect className="rect1"></LoadingRect>
                    <LoadingRect className="rect2"></LoadingRect>
                    <LoadingRect className="rect3"></LoadingRect>
                    <LoadingRect className="rect4"></LoadingRect>
                    <LoadingRect className="rect5"></LoadingRect>
                </LoadingWrapper>
            </LoadingConten>
        );
    }
}
 
export default Loading;