import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
	return (
		<header class="header">
			<Link to="/" className='logo'> <i class="fa-solid fa-book-open-reader"></i>  Fresh-Keep</Link>

			{/* <form action="" class="search-form">
				<input type="search" name="" placeholder="Search" id="searchBox"></input>
				<label for="searchBox" class="fas fa-search"></label>
			</form> */}
			<Link to="/notes">
				<p class="sidebar-heading link text-decor-none">
					<i class="fa-solid fa-book"></i>
					Notes</p>
			</Link>
			<Link to="/labels">
				<p class="sidebar-heading link text-decor-none">
					<i class="fa-solid fa-tag"></i>
					Labels</p>
			</Link>
			<Link to="/archives">
				<p class="sidebar-heading link text-decor-none">
					<i class="fa-solid fa-inbox"></i>
					Archives</p>
			</Link>

			<div class="icons">
				<div class="fas fa-search" id="search-btn"></div>
				{/* <div class="fas fa-moon" id="theme-btn"></div> */}

				{/* <div class="m1 badge-container">
						<div class="fas fa-shopping-cart"></div>
						<span class="badge right-badge sm-badge">10</span>
					</div> */}
				<div class="fas fa-user" id="menu-btn"></div>
			</div>



		</header>
	)
}

export default NavBar
