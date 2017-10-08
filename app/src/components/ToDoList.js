import React, { Component } from 'react';
class ToDoList extends React.Component {
    
    deleteItem(index){
        this.props.deleteItem(index);
    }
    editItem(index){
        this.props.editItem(index);
    }
    render(){
        var items = Object.values(this.props.items);
        var sum = items.reduce(function(total, item) {
            return total + parseFloat(item.props.price);
        }, 0); 
        var barStyle = {width: '100%'};
        var valueNow = "100";
        if (sum == 0){
            barStyle.width = "0%";
            valueNow = "0";             
        }  
        else if (sum < this.props.budget){
            var percentage = (sum/this.props.budget)*100;
            barStyle.width = percentage.toString() + "%";
            valueNow = percentage.toString(); 
        }
        var divStyle = {position: "fixed"};
        return(
            <div>
                <div class="progress">
                    <div className="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" style={barStyle} aria-valuenow={valueNow} aria-valuemin="0" aria-valuemax="100">${sum}</div>
                </div>  
                <div>
                <ul class="list-group">{items}</ul>
                </div>
            </div>
        
        );   
    }
}

export default ToDoList;