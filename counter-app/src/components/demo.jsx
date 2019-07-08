import React, { Component } from 'react';

class Demo extends Component {

   
    state = { 
        count:0,
        tags:['tag1','tag2','tag3']
     };

    renderTags(){
        if(this.state.tags.length===0){
            return <p>There are no tags!!!</p>
        }else{
            return <ul>{this.state.tags.map((tag)=><li key={tag}>{tag}</li>)}</ul>
        }
    }

    // constructor(){
    //     super();
    //     this.handleIncrement=this.handleIncrement.bind(this);
    //     // console.log('',this)
    // }

    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }

    render()  { 
        return ( 
            <div>
                {this.state.count}
               {this.state.tags.length===0 && "Please create a new tag!!"} 
               {this.renderTags()}
               <button onClick={this.handleIncrement}>Click</button>
            </div>
         );
    }
}
 
export default Demo;