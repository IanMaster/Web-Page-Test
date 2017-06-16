import React,{Component} from "react"
import {FormGroup , FormControl, Form, Col} from "react-bootstrap"
import "../css/App.css"

class SubMenuTitle extends Component{
    constructor(props){
        super(props);
        this.state = {
            subMenuTitle : this.props.subMenuTitle,
            formPlaceHolder : this.props.formPlaceHolder
        }
    }

    render(){
        return(
            <div className="row SubMenuRowTitle">
                <Form >
                    <FormGroup controlId="formBasicText">
                        <Col  lg={8}  md={8} sm={8}>
                            <h3 className="subMenuTitle">{this.state.subMenuTitle}</h3>
                        </Col>
                        <Col lg={4} md={4} sm={4} >
                            <FormControl
                                type="text"
                                value=""
                                placeholder={this.state.formPlaceHolder}
                            />
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default SubMenuTitle