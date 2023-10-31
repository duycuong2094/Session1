import React, { Component } from 'react';

class Render extends Component {
    constructor(){
        super();
        this.arr=["HTML","Java","Java","Python"]
    }
    render() {
        return (
            <div className='render'>
                <h1>Danh Sách Khóa Học</h1>
                <div>
                    <ul>
                       {this.arr.map((item,index)=>(
                        <li key={index}>{item}</li>
                       ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Render;
