import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";

export const RestrictAuth = () => {
	const { authState } = useAuth();
	const location = useLocation();
	// console.log("authState", authState);

	return authState.userID ? (<Navigate to="/notes" state={{ from: location }} replace />) : (<Outlet />);
}
