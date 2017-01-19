import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        var homeActive = '';
        var aboutActive = '';

        if(this.props.page === 'home'){
            homeActive = 'active'
        }else if(this.props.page === 'about'){
            aboutActive = 'active'
        }
        return (
            <div>
                <nav className={"navbar " + (this.props.color === 'dark' ? 'navbar-inverse':'navbar-default')}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">{this.props.brand}</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className={homeActive}><a onClick={this.props.homeClick} href="#">Link</a></li>
                                <li className={aboutActive}><a onClick={this.props.aboutClick} href="#">Link</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

Navbar.defaultProps = {
    brand: 'First React App',
    color: 'light'
};

Navbar.propTypes = {
    brand: React.PropTypes.string.isRequired
};


export default Navbar;
