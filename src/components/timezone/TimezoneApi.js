
import React,{Component} from "react";

// class TimezoneApi extends React.component{
    class TimezoneApi extends Component{
        constructor(props){
            super(props);
            this.state ={sunrise:"",sunset:""}
        }
        //component updatetion 
        shouldComponentUpdate(updatedProps,updatedState){
            console.log("shouldComponentUpdate")
            return true // its for calling 

        }
        render(){
            console.log("render")
            let html =<div>
                <p>
                    sunrise:{this.state.sunrise}:sunset:{this.state.sunset}
                </p>
                <p>
                    lat:{this.props.lat}:long:{this.props.long}
                </p>
            </div>;
            return html;
        }

        componentDidMount(){
            console.log("componentDidMount")
            this.setState({"sunrise":"7.30am"});
            this.setState({"sunset":"5.30pm"});
            
            this.timer =setInterval(()=>{
                this.setState({
                    sunrise:"6:30am",
                    sunset:"6:30pm"
                })
            },5000) //timer sec


        }
        componentWillUnmount(){
            clearInterval(this.timer);
        }


}
export default TimezoneApi;
