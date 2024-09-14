import React from 'react';
import './Circle.less';

class Circle extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <span className={`circle-${this.props.color} fl`}></span>
        )
    }
}

export default Circle;