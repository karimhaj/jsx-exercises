import React from 'react'

const nome = <h1>Paolo</h1>;

export default class Helloworld extends React.Component{
    hello(name){
        return 'Hello, '+ name; 
    }


    render(){
       return <h1>{this.hello(nome)}</h1>
    }
}

//if the name variable contains a JSX expression instead of a string the result is "Hello, [Object, Object]"