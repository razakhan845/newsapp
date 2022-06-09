import MainLayout from "./layout"
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function DashboardUser() {

    const [user, setUser] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.user) {
            navigate('/news')
        } else {
            navigate('/')
        }
    }, []);

    return (
        <>
            <MainLayout />
        </>
    );
};

export default DashboardUser;