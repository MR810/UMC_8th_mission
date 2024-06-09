import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header({ isLoggedIn, setIsLoggedIn }) {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate('/');
        setSidebarOpen(false); // Close sidebar on logout
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="header-container">
            <div className="header-wrap">
                <Link to="/" className="logo-link">
                    <img
                        className="logo-image"
                        alt="UMC Movie"
                    />
                </Link>
                <div className={`menu-icon ${sidebarOpen ? 'hidden' : ''}`} onClick={toggleSidebar}>
                    &#9776;
                </div>
                <ul className={`nav-list ${sidebarOpen ? 'active' : ''}`}>
                    {isLoggedIn ? (
                        <button className="log-button" onClick={handleLogout}>로그아웃</button>
                    ) : (
                        <>
                            <Link className="nav-link" to="/loginPage">로그인</Link>
                            <Link className="nav-link" to="/validation">회원가입</Link>
                        </>
                    )}
                    <Link className='nav-link' to="/PopularPage">Popular</Link>
                    <Link className='nav-link' to="/NowPlayingPage">Now Playing</Link>
                    <Link className='nav-link' to="/TopRatedPage">Top Rated</Link>
                    <Link className='nav-link' to="/UpComing">Upcoming</Link>
                </ul>
            </div>
            {/* Sidebar */}
            <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
                <Link className="logo-link" to="/" onClick={closeSidebar}>
                    UMC Movie
                </Link>
                {isLoggedIn ? (
                    <button className="log-button" onClick={handleLogout}>로그아웃</button>
                ) : (
                    <>
                        <Link className="nav-link" to="/loginPage" onClick={closeSidebar}>로그인</Link>
                        <Link className="nav-link" to="/validation" onClick={closeSidebar}>회원가입</Link>
                    </>
                )}
                <Link className='nav-link' to="/PopularPage" onClick={closeSidebar}>Popular</Link>
                <Link className='nav-link' to="/NowPlayingPage" onClick={closeSidebar}>Now Playing</Link>
                <Link className='nav-link' to="/TopRatedPage" onClick={closeSidebar}>Top Rated</Link>
                <Link className='nav-link' to="/UpComing" onClick={closeSidebar}>Upcoming</Link>
            </div>
        </div>
    );
}