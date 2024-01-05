import React, {Component} from "react";

class Menu extends Component{

  constructor(props){
        super(props);
        this.username = "Karthik"
    }

    render()
    
    {

        let html;
        let name = "Hello World";
        
        let add = (a,b) => {  //ES6 concept
            return a+b;
        }
        
        let sub = (a,b) => {
            return a-b;
        }
        
        function mul(a,b) {
            return a*b;
        }

        function div(a,b){
            return a/b;
        }

        setTimeout(function(){
            name = "Hello All"
            div(20,4);

        }, 2000)

        html =(
            <div>
                <p>Java</p>
                <ul>
                    <li>3+4 = {add(3,4)}</li>
                    <li>5-2 = {sub(5,2)}</li>
                    <li>5*2 = {mul(5,2)}</li>
                    <li>5/2 = {div(5,2)}</li>
                    <li>Name: {name}</li>
                    <li>Global name: {this.username}</li>
                </ul>
            </div>
        );
        return html;
    }
    
}

export default Menu;