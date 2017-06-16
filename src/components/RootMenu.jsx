import React,{Component} from "react"
import RootMenuItem from "./RootMenuItem"
import "../css/App.css"

class RootMenu extends Component{

    render(){
        return(
            <div id="rootMenuDiv" className="aside">
                <RootMenuItem id="MenuSolicitudes" iconName="address-card-o" itemText="Solicitudes" active="true"/>
                <RootMenuItem id="MenuComercial" iconName="line-chart" itemText="Comercial" />
                <RootMenuItem id="MenuDashboard" iconName="pie-chart" itemText="Dashboard" />
                <RootMenuItem id="MenuDashboard" iconName="list-ol" itemText="Organizacion" />
                <RootMenuItem id="MenuDashboard" iconName="archive" itemText="Cartera" />
                <RootMenuItem id="MenuDashboard" iconName="bar-chart" itemText="Analytics" />
                <RootMenuItem id="MenuDashboard" iconName="users" itemText="Usuarios" />
                <RootMenuItem id="MenuDashboard" iconName="user-circle-o" itemText="Partners" />
            </div>
        );
    }

}

export default RootMenu