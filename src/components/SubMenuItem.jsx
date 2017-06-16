import React,{Component} from "react"
import "../css/App.css"

class RootMenuItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            id : this.props.id,
            itemText : this.props.itemText,
            active : this.props.active
        }
    }

    setClassNames(properties){
        let names = ["container" , "SubMenuItem"];
        if(properties.active === "true"){
            names.push("Active");
        }
        return names.join(" ");
    }

    render(){
        return(
            <div id={this.state.id} className={this.setClassNames(this.state)}>
                <div className="row">
                    <span className="SubMenuItemLabel">{this.state.itemText}</span>
                </div>
            </div>
        );
    }

}
export default RootMenuItem