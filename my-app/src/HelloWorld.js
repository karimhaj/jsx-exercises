import React from 'react'

export default class Helloworld extends React.Component{
    hello = 'Hello, World!'
    render(){
       return <h1>{this.hello}</h1> 
    }
}

