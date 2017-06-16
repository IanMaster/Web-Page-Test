
import React,{Component} from "react"
import {Row,Col,Button} from "react-bootstrap"

class Report extends Component{

    constructor(props){
        super(props);
        this.status = {
            numDeApli : this.props.numDeApli,
            fecha : this.props.fecha,
            personaFis : this.props.personaFis,
            Monto : this.props.Monto,
            from : this.props.from,
            stat : this.props.stat,
            score : this.props.score
        }
    }
 //ReportLabel
    render(){
        return(
            <div className="ReportWrapper" >
                <Row>
                    <Col lg={1} md={1} sm={1} xs={2}>
                        <Row>
                            <span className="ReportLabel">AP. NO.</span>
                        </Row>
                        <Row>
                            <span className="ReportValue" >{this.status.numDeApli}</span>
                        </Row>
                    </Col>
                    <Col lg={1} md={2} sm={2} xs={2}>
                        <Row>
                            <span className="ReportLabel">Fecha</span>
                        </Row>
                        <Row>
                            <span className="ReportValue" >{this.status.fecha}</span>
                        </Row>
                    </Col>
                    <Col lg={2} md={2} sm={2} xs={2}>
                        <Row>
                            <span className="ReportLabel">Persona Fisica</span> </Row>
                        <Row>
                            <span className="ReportValue" >{this.status.personaFis}</span>
                        </Row>
                    </Col>
                    <Col lg={1} md={1} sm={1} xs={2}>
                        <Row>
                            <span className="ReportLabel">Monto</span>
                        </Row>
                        <Row>
                            <span className="ReportValue" >{this.status.Monto}</span>
                        </Row>
                    </Col>
                    <Col lg={2} md={2} sm={2} xs={2}>
                        <Row>
                            <span className="ReportLabel">From</span>
                        </Row>
                        <Row>
                            <span className="ReportValue" >{this.status.from}</span>
                        </Row>
                    </Col>
                    <Col lg={2} md={2} sm={2} xs={2}>
                        <Row>
                            <span className="ReportLabel">Status</span>
                        </Row>
                        <Row>
                            <span className="ReportValue" >{this.status.stat}</span>
                        </Row>
                    </Col>
                    <Col lg={1} md={1} sm={1} xs={2}>
                        <Row>
                            <span className="ReportLabel">Score</span>
                        </Row>
                        <Row>
                            <span className="ReportValue" >{this.status.score}</span>
                        </Row>
                    </Col>
                    <Col lg={2} md={1} sm={1} xs={2}>
                        <Button bsStyle="primary" >VER DETALLE</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Report