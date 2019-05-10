import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Products</Link>
            <div className="right menu">
                <div className="item">
                    <div className="ui transparent icon input">
                        <input type="text" placeholder="Search Products..."/>
                        <i className="search link icon"></i>
                    </div>
                </div>
            </div>
            <div className="right menu">
                <Link to="/Cart" className="item">
                    <i className="shopping cart icon"></i>
                </Link>
            </div>
        </div>
    )
};

export default Header;