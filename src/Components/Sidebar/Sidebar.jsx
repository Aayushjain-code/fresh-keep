import { Link } from "react-router-dom"
import React from 'react'
import "./Sidebar.css"




const Sidebar = () => {
	return (
		<>
			<aside class="sidebar">
				<ul class="m1 p1 list-non-bullet ">
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
				</ul>
			</aside>
		</>
	)
}

export default Sidebar
