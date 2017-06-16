import React,{Component} from "react"
import SubMenuItem from "./SubMenuItem"
import SubMenuTitle from "./SubMenuTitle"
import "../css/App.css"
//<h2 className="subMenuTitle">SOLICITUDES Y SCORE</h2>
class SubMenu extends Component{

    render(){
        return(
            <div id="subMenuDiv" className="center-block">
                <div className="container">
                    <SubMenuTitle subMenuTitle="SOLICITUDES Y SCORE"  formPlaceHolder="Buscar Aplicación"/>
                </div>
                <div id="subMenuLabelsDiv">
                    <SubMenuItem id="id1" itemText="Todas" active="true"/>
                    <SubMenuItem id="id2" itemText="Ventas menores" />
                    <SubMenuItem id="id3" itemText="Aplicaciones" />
                    <SubMenuItem id="id3" itemText="Verificados" />
                    <SubMenuItem id="id3" itemText="Aprobados" />
                    <SubMenuItem id="id3" itemText="Aceptados" />
                    <SubMenuItem id="id3" itemText="Rechazados" />
                    <SubMenuItem id="id3" itemText="Puesto en cola" />
                    <SubMenuItem id="id3" itemText="Inspeccionados" />
                </div>
            </div>
        );
    }

}

export default SubMenu
