import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import DashboardUser from "../../pages/dasboard";
import LoginUser from "../../pages/login";
import NotFound from "../../pages/notfound";
import SignupUser from "../../pages/signup";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginUser />} />
                <Route path="/signup" element={<SignupUser />} />
                <Route path="/*" element={<DashboardUser /> } />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
