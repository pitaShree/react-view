import React, { Component,Fragment } from 'react';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-sm bg-light">
                    <ul className="navbar-nav text-right">
                        <li className="nav-item">
                            <a className="nav-link" href='ddd'>Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="j">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="hgkh">Link 3</a>
                        </li>
                    </ul>
                </nav>
            </Fragment>
        );
    }
}

export default Header;