import React, { Component } from 'react';
class ToDoList extends React.Component {
    constructor(props){
        this.state.items = this.props.items;
    }
    render(){
        return(
        <ul>
            {this.state.items}
        </ul>
        
        );
    
    }
}