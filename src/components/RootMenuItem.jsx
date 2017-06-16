import React,{Component} from "react"
import FontAwesome from "react-fontawesome"
import "../css/App.css"

class RootMenuItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            id : this.props.id,
            iconName : this.props.iconName,
            itemText : this.props.itemText,
            active : this.props.active
        }
    }

    setClassNames(properties){
        let names = ["container" , "RootMenuItem"];
        if(properties.active === "true"){
            names.push("Active");
        }
        return names.join(" ");
    }


    render(){
        return(
            <div id={this.state.id} className={this.setClassNames(this.state)}>
                <div className="row">
                    <FontAwesome
                        className="RootMenuItemIcon"
                        name={this.state.iconName}
                    />
                </div>
                <div className="row">
                    <span className="RootMenuItemLabel">{this.state.itemText}</span>
                </div>
            </div>
        );
    }



}

export default RootMenuItem