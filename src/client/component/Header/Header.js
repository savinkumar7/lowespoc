import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';



const Header = () => {
    const data = useSelector(state => state.count);
    return (
        <header className="header ">
            <div className="logo"> POC Shop</div>
            <input className="searchBar" type="search" />
            <div className="icon" onClick = {() => <Link to="/cart" />}>
                <FontAwesomeIcon icon={faShoppingCart} size={"2x"} />
                <span >({data.displayCount})</span>

            </div>

        </header>
    )
}

export default Header;
