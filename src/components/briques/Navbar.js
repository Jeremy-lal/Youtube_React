import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Briques/Navbar/Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to='/'>
                <img src="https://img.phonandroid.com/2017/08/youtube-nouveau-logo.jpg" alt="logo" />
            </Link>
            <div className="search">
                <input placeholder="  Rechercher" />
                <button><i class="fas fa-search"></i></button>
            </div>
        </div>
    )
}