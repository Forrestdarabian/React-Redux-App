import React, { Component } from 'react';
import {connect} from "react-redux";

import getRandomDog from "../actions"


function mapStateToProps(state){
    const {image, isFetching} = state;
    return {image, isFetching};
}


class DogPics extends Component {
    render() { 
        // console.log(this.props.url)
        return ( 
            <div>
                <h1>Do you love dogs?</h1>
                <h3>&#8681; If so, click this button! &#8681;</h3>
                <button onClick={this.props.getRandomDog} >Click Here For Some Dogs</button>
                {this.props.isFetching 
                ? <h1>loading</h1>
                : <img src={this.props.image} alt="Dog" />
                }
                
            </div>

         );
    }
}
 
export default connect(mapStateToProps, {getRandomDog})(DogPics);