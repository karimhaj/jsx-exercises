import React from 'react'

export default class Helloworld extends React.Component{
    hello(name){
        return 'Hello, '+ name; 
    }

    render(){
       return <h1>{this.hello('Sarah')}</h1> 
    }
}

