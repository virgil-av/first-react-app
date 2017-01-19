import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid">
                <hr />
                    <footer>
                        <p>&copy; {this.props.copy_year} {this.props.website}</p>
                    </footer>
            </div>
        );
    }
}

Footer.defaultProps = {
    website: 'My website!',
    copy_year: 2017,
};

Footer.propTypes = {
    website: React.PropTypes.string.isRequired,
    copy_year: React.PropTypes.number.isRequired

};
export default Footer;
