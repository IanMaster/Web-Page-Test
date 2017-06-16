import React,{Component} from "react"
import {Pagination} from "react-bootstrap"

class Pages extends Component{
    constructor(props){
        super(props);

        this.state = {
            activePage : this.props.activePage
        }

    }
    render(){
        return(
            <div id="paginationDiv" className="center-block">
                <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    items={3}
                    maxButtons={5}
                    activePage={1}
                />
            </div>
        );
    }

}

export default Pages