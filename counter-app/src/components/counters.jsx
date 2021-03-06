import React, {Component} from 'react'
import Counter from'./counter'

class Counters extends Component{

    

    render(){
        return(
            <div>
                <button 
                className="btn btn-primary btn-sm m-2"
                onClick={this.props.onReset}>Reset</button>
                {this.props.counters.map((counter)=><Counter 
                    key={counter.id} 
                    // value={counter.value} 
                    // id={counter.id}
                    onDelete={this.props.onDelete}
                    onIncrement={this.props.onIncrement}
                    counter={counter}>
                    {/* <h4>Counter #{counter.id}</h4> */}
                </Counter>)}
            </div>
        ) 
    }
}

// function Main(){
//     return(
//         <div>
//             <Counter/>
//             <Counter/>
//             <Counter/>
//             <Counter/>
//             <Counter/>
//         </div>
//     ) 
// }
 
export default Counters;

