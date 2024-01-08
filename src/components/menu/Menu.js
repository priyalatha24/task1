import React, {Component} from "react";

class Menu extends Component{

  constructor(props){
        super(props);
      this.state ={name:"hello imarticus"}
      console.log("constructor")
    }

    componentDidMount=()=>{
        console.log("compoundDidMount")

        this.timer =setInterval(()=>{
            console.log("Hello all")
            this.setState({name:"Hello All"});
        },5000);
    }

    componentWillUnmount =()=>{
        console.log("componentWillUnmount")
        clearInterval(this.timer);
    }

    shouldComponentUpdate =(updatedProps,updatedState)=>{
        console.log(this.state.name+" :"+updatedState.name)
        console.log("shouldComponentUpdate")
        return true;
    }
    getSnapshotBeforeUpdate=()=>{
        console.log("getSnapshotBeforeUpdate")
    }
    componentDidCatch=() =>{
        console.log("componentDidCatch")
    }

    render() {

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
                    <li>Global name: {this.state.name}</li>
                    <li>Global name: {this.props.first_name}</li>
                    <li>Global name: {this.props.age}</li>
                    {this.props?.data?.map((skill)=>(
                          <li>skill: {skill.skill} Rating:{skill.rating}</li>
                    ))}
                </ul>
            </div>
        );
        return html;
    }
    
}

export default Menu;