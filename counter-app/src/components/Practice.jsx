import React, {Component} from 'react'

class Practice extends Component {
    state = {
        count:0
      }

counterValue(){
    if(this.state.count<=0){
        return 'Zero'
    }else{
        return this.state.count
    }
}
    
    render() { 
        return ( 
            <div>
                <span>{this.counterValue()}</span>
                <button onClick={this.clickEvent}>Click ME!</button>
            </div>
         );
    }

clickEvent=()=>{
    this.setState({count:this.state.count+1})
}

}
 
export default Practice;