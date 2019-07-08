import React, { Component } from 'react';

class Counter extends Component {
    state = {
        // value: this.props.counter.value,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1','tag2','tag3']
    };

    styles={
        fontSize: 10,
        fontWeight: 'bold',
        margin:10
    };

    // addCounter=()=>{
    //     this.setState({value:this.state.value+1})
    // }

    subCounter=()=>{
        if(this.state.value<=0){
            alert("no element in cart")
        }  else{
            this.setState({value:this.state.value-1})
        }
        
    }

    render() { 
       // console.log(this.props)
        return( 
            <div>
                 {/* {this.props.children} */}
                {/* <img src={this.state.imageUrl} /> */}
                <span style={ this.styles } className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={()=>this.props.onIncrement(this.props.counter)} style={{fontSize:20, margin:10}} className='btn btn-secondary btn-sm'>Increment</button>
                {/* <button onClick={this.subCounter} style={{fontSize:20, margin:10}} className='btn btn-secondary btn-sm'>Decrement</button> */}
                <button onClick={()=>this.props.onDelete(this.props.counter.id)} style={{fontSize:20, margin:10}} className='btn btn-danger btn-sm'>Delete</button>
                {/* <ul>
                    {this.state.tags.map((tag) => <li key={tag}>{ tag }</li>)}
                </ul>       */}
            </div >
            );
        }

        getBadgeClasses() {
            let classes='badge m-2 badge-';
            classes+=(this.props.counter.value===0)?"warning":"primary"
            return classes;
        }

        formatCount(){
        const {value}=this.props.counter;
        return value===0?'Zero':value
    }
    }


 
export default Counter;