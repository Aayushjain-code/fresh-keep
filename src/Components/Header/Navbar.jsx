import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import { useAuth } from '../../Context/authContext'
import { Toast } from "../Toast/toast";
const NavBar = () => {
	const { logout } = useAuth();
	return (
		<header className="header">
			<Link to="/notes" className='logo'> <i className="fa-solid fa-book-open-reader"></i>  Fresh-Keep</Link>

			{/* <form action="" className="search-form">
				<input type="search" name="" placeholder="Search" id="searchBox"></input>
				<label for="searchBox" className="fas fa-search"></label>
			</form> */}
			{/* <Link to="/notes">
				<p className="sidebar-heading link text-decor-none">
					<i className="fa-solid fa-book"></i>
					Notes</p>
			</Link>
			<Link to="/labels">
				<p className="sidebar-heading link text-decor-none">
					<i className="fa-solid fa-tag"></i>
					Labels</p>
			</Link>
			<Link to="/archived">
				<p className="sidebar-heading link text-decor-none">
					<i className="fa-solid fa-inbox"></i>
					Archives</p>
			</Link>
			<Link to="/trashed">
				<p className="sidebar-heading link text-decor-none">
					<i className="fa-solid fa-trash-can"></i>
					Trashed</p>
			</Link> */}

			<div className="icons">
				<div className="fas fa-search" id="search-btn"></div>
				{/* <div className="fas fa-moon" id="theme-btn"></div> */}

				{/* <div className="m1 badge-container">
						<div className="fas fa-shopping-cart"></div>
						<span className="badge right-badge sm-badge">10</span>
					</div> */}
				{/* <div className="fas fa-user" id="menu-btn" onClick={() => logout()}></div> */}
				<p className="sidebar-heading link text-decor-none" style={{ paddingTop: "0rem" }} onClick={() => logout()}>
					<i className="fa-solid fas fa-user"></i>
					Logout
				</p>
			</div>
			<Toast />


		</header>
	)
}

export default NavBar
