import React from 'react'

export default class Helloworld extends React.Component{
    hello(name){
        return 'Hello, '+ name; 
    }

    render(){
       return <h1>{this.hello()}</h1> 
    }
}
//if the name variable is not passed into the function the result is "Hello, undefined"