import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

constructor(props) {
  super(props)

  this.state = {
     message: 'Parent'
  }
  this.GreetParent = this.GreetParent.bind(this)
}

GreetParent(childName){
    alert(`Hello ${this.state.message} from ${childName}`)
}

  render() {
    return (
        <div>
            <ChildComponent greetHandler={this.GreetParent} />
        </div>
 
        
   
    )
  }
}

export default ParentComponent