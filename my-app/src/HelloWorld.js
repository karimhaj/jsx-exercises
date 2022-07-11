import React from 'react'

export default class Helloworld extends React.Component{

    combineParameters(a,b){
        return a + b
    }

    render(){
       return <h2>{this.combineParameters(45,62)}</h2>
    }
}

