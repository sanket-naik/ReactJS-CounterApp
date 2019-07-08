import React from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters'

class App extends React.Component {
  state={
    counters:[
        {id:1,value:0},
        {id:2,value:1},
        {id:3,value:2},
        {id:4,value:3},
    ]
  }
  
  handleIncrement=counter=>{
   let counters=[...this.state.counters]
   const index=counters.indexOf(counter);
   counters[index]={...counter};
   counters[index].value+=1;
   this.setState({counters});
  
  }
  
  handelDelete=(counterId)=>{
    const counters=this.state.counters.filter(c=>c.id!==counterId)
    this.setState({counters})
  }
  
  handleReset=()=>{
    const counters=this.state.counters.map(c=>{
        c.value=0;
        return c;
    });
    this.setState({counters})
  }
  render() { 
    return (
      <React.Fragment>
        <NavBar 
        counters={this.state.counters.filter(c=>c.value>0).length}
        />
        <main className='container'>
          <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handelDelete}
          />
        </main>
     </React.Fragment>
    );
  }
}
 
export default App;

