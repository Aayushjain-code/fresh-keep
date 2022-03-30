import React from 'react'
import { Link } from 'react-router-dom'
import "./LandingPage.css"
const LandingPage = () => {
	return (
		<><main class="flex-r" >
			<section className="home" >
				<header class="flex-r landing-header">
					<div class="landing-text">
						<h1 class="landing-heading">Create Here Read Everywhere</h1>
						<p class="landing-para">Manage your daily tasks and workflow in a modern way and boost your efficiency without any efforts</p>
						<div class="landing-btns">
							<Link to="/login">
								<button class="m1-right btn btn-secondary">Login</button>
							</Link>
							<Link to="/signup">
								<button class="m1-right btn btn-success">Create Account</button>
							</Link>
						</div>
					</div>
					<img class="landing-img"
						src="https://cdn.dribbble.com/users/1262105/screenshots/15716022/media/e5590d5c23611c6635933bf13ee19988.gif" alt="FreshStyle-UI"></img>

				</header>
			</section>
		</main>
		</>
	)
}

export default LandingPage
