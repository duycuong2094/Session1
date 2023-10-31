import React, { Component } from 'react';

class Sum extends Component {
   constructor(){
    super();
    this.sum=()=>{
        let a = 3 ;
        let b =4;
        return a+b
    }
   }
    render() {
        return (
            <div>
                Tổng của 3 và 4 là : {this.sum()}
            </div>
        );
    }
}

export default Sum;