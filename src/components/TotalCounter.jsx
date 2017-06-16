import React,{Component} from "react"

class TotalCounter extends Component{

    constructor(props){
        super(props);
        this.state = {
            totalDeApplicaciones:this.props.totalDeApplicaciones
        }
    }

    render(){
        return(
            <div id="TotalCounterDiv">
                <p className="TotalCounter">
                    Total de Aplicaciónes: {this.state.totalDeApplicaciones}
                </p>
            </div>
        );
    }
}

export default TotalCounter