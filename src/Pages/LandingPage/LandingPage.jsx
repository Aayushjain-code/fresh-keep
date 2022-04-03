import React from 'react'
import { Link } from 'react-router-dom'
import "./LandingPage.css"
const LandingPage = () => {
	return (
		<><main className="flex-r" >
			<section className="home" >
				<header className="flex-r landing-header">
					<div className="landing-text">
						<h1 className="landing-heading">Create Here Read Everywhere</h1>
						<p className="landing-para">Manage your daily tasks and workflow in a modern way and boost your efficiency without any efforts</p>
						<div className="landing-btns">
							<Link to="/login">
								<button className="m1-right btn btn-secondary">Login</button>
							</Link>
							<Link to="/signup">
								<button className="m1-right btn btn-success">Create Account</button>
							</Link>
						</div>
					</div>
					<img className="landing-img"
						src="https://cdn.dribbble.com/users/1262105/screenshots/15716022/media/e5590d5c23611c6635933bf13ee19988.gif" alt="FreshStyle-UI"></img>

				</header>
			</section>
		</main>
		</>
	)
}

export default LandingPage
