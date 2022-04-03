import { Link } from "react-router-dom"
import React from 'react'
import "./Sidebar.css"
import { useAuth } from '../../Context/authContext'



const Sidebar = () => {
	return (
		<>
			<div class="sidebar">
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
					<Link to="/archived">
						<p class="sidebar-heading link text-decor-none">
							<i class="fa-solid fa-inbox"></i>
							Archives</p>
					</Link>
					<Link to="/trashed">
						<p class="sidebar-heading link text-decor-none">
							<i class="fa-solid fa-trash-can"></i>
							Trashed</p>
					</Link>
				</ul>
			</div>
		</>
	)
}

export default Sidebar
