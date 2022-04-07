import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
export const RequireAuth = () => {
	const { authState } = useAuth();
	const location = useLocation();
	return authState.userID ? (
		<Outlet />
	) : (
		<Navigate to="/" state={{ from: location }} replace />
	);
};
