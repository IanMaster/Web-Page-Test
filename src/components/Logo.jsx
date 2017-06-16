import React,{Component} from "react"
import "../css/App.css"

class Logo extends Component{
    constructor(props){
        super(props);
        this.state = {
            url : "/logo.svg"
        }
    }

    render(){
        return(
            <img src={this.state.url} className="App-logo" alt="logo"/>
        );
    }
}

export default Logo