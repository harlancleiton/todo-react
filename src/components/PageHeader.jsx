import React, {Component} from 'react';
import {Breadcrumbs, Paper} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from "@material-ui/core/Typography";

class PageHeader extends Component {
    render() {
        const {title, subtitle} = this.props;
        return (
            <Paper elevation={0}>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small"/>} aria-label="breadcrumb">
                    <Link color="inherit">
                        {title}
                    </Link>
                    <Typography color="textPrimary">{subtitle}</Typography>
                </Breadcrumbs>
            </Paper>
        );
    }
}

export default PageHeader;
