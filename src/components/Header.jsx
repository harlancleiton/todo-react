import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import {Toolbar, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Button from "@material-ui/core/Button";
import './Header.css';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar position={"static"}>
                    <Toolbar>
                        <IconButton edge={"start"} color={"inherit"} aria-label={"menu"}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant={"h6"} className={"title"}>
                            Minhas Tarefas
                        </Typography>
                        <Button color={"inherit"} component={Link} to={"/todos"}>
                            Tarefas
                        </Button>
                        <Button color={"inherit"} component={Link} to={"/about"}>
                            Sobre
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;
