import React, {Component} from 'react';

class PageHeader extends Component {
    render() {
        const {title, subtitle} = this.props;
        return (
            <header className="page-header">
                <h2>{title} <small>{subtitle}</small></h2>
            </header>
        );
    }
}

export default PageHeader;
