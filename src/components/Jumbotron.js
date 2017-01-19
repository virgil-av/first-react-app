import React, { Component } from 'react';

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                    <p><a className="btn btn-primary btn-lg"
                          href={this.props.link} role="button">
                        Learn more &raquo;</a></p>
                </div>
            </div>
        );
    }
}

Jumbotron.defaultProps = {
    heading: 'Welcome!',
    text: 'My first website built with React Components',
    link: 'http://github.com'
};

Jumbotron.propTypes = {
    heading: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired
};

export default Jumbotron;
