import React,{Component} from "react"
import {Navbar, NavDropdown, MenuItem, Nav} from "react-bootstrap"
import FontAwesome from "react-fontawesome"
import Logo from "./Logo"
import "../css/App.css"

class PageHeader extends Component{

    setSaludo(user){
        const saludo = "Bienvenido " + user;
        this.setState({saludo});
    }

    componentWillMount(){
        this.setSaludo(this.props.user);
    }

    goToRepo(){
        const win = window.open("https://github.com/IanMaster/Web-Page-Test", '_blank');
        win.focus();
    }

    render(){
        return(
            <Navbar className="PageHeader">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Logo/>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavDropdown title={this.state.saludo} id="UserMenu" >
                        <MenuItem>
                            <span>Configuración</span>
                        </MenuItem>
                        <MenuItem>
                            <span>Cerrar sesión</span>
                        </MenuItem>
                        <MenuItem divider />
                        <MenuItem onClick={() => this.goToRepo()}>
                            <FontAwesome
                                name="github"
                                ariaLabel="Repositorio"
                                className="GitHubIco"
                            />
                        </MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}
export default PageHeader
