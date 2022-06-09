import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';
import Inputfield from "../config/commounts/input";
import UserButton from "../config/commounts/button";
import { useNavigate } from "react-router-dom";

function LoginUser() {

    const navigate = useNavigate();

    let gotodashboard = () => {
        console.log("User Click Login")
        navigate("dashboard", {
            state:{
                user:true
            },
        });
    }
    return (
        <Box>
            <Box sx={{ padding: 3 }}>
                <Typography variant="h3">LogIn</Typography>
            </Box>
            <Box sx={{ padding: 1 }}>
                <Inputfield label="Email" type="email" />
            </Box>
            <Box sx={{ padding: 1 }}>
                <Inputfield label="Password" type="password" />
            </Box>
            <Box sx={{ padding: 1 }}>
                <UserButton label="Login" onClick={gotodashboard} />
            </Box>
        </Box>
    );
};

export default LoginUser;