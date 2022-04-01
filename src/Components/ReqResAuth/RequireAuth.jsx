import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";
export const RequireAuth = () => {
	const { authState } = useAuth();
	const location = useLocation();
	console.log("authState", authState);
	return authState.userID ? (
		<Outlet />
	) : (
		<Navigate to="/" state={{ from: location }} replace />
	);
};
