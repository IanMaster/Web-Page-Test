import React,{Component} from "react"
import Report from "./Report"

class ReportGrid extends Component{
/*
    numDeApli : this.props.numDeApli,
    fecha : this.props.fecha,
    personaFis : this.props.personaFis,
    Monto : this.props.Monto,
    from : this.props.from,
    stat : this.props.stat,
    score : this.props.stat
    */
    render(){
        return(
            <div className="center-block ReportGrid container">
                <Report
                    numDeApli="5262" fecha="16/06/2017"
                    personaFis="Ian Castillo" Monto="$100,000"
                    from="CDMX" stat="Aplicacion Completa" score="100"
                />
                <Report
                    numDeApli="9029" fecha="16/06/2017"
                    personaFis="Marco Hernandez" Monto="$500,000"
                    from="CDMX" stat="Aplicacion Completa" score="100"
                />
                <Report
                    numDeApli="2324" fecha="16/06/2017"
                    personaFis="Gabriela Ortiz" Monto="$100,000"
                    from="CDMX" stat="Aplicacion Completa" score="100"
                />
                <Report
                    numDeApli="3232" fecha="16/06/2017"
                    personaFis="levi Daniel" Monto="$500,000"
                    from="CDMX" stat="Aplicacion Completa" score="100"
                />
                <Report
                    numDeApli="8282" fecha="16/06/2017"
                    personaFis="Liliana Maceda" Monto="$500,000"
                    from="CDMX" stat="Aplicacion Completa" score="100"
                />
            </div>
        );
    }
}

export default ReportGrid