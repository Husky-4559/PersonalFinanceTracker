// react-router dom
import { Form, NavLink } from "react-router-dom";

// library imports
import { TrashIcon } from "@heroicons/react/24/solid";
// assets
import logomark from "../assets/logomark.svg";

const Nav = ({ userName }) => {
	return (
		<nav>
			<NavLink to="/" aria-label="Go To Home">
				<img src={logomark} alt="" height={300} />
				<br />
				<h2>Budget Bloom</h2>
			</NavLink>
			{userName && (
				<Form
					method="post"
					action="/logout"
					onSubmit={(event) => {
						if (!confirm("Delete User and All Data?")) {
							event.preventDefault();
						}
					}}
				>
					<button type="submit" className="btn btn--warning">
						<span>Delete User</span>
						<TrashIcon width={20} />
					</button>
				</Form>
			)}
		</nav>
	);
};

export default Nav;
