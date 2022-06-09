import { Box } from "@mui/system";
import Button from '@mui/material/Button';

function UserButton(props) {

    const {label, onClick} = props;

    return (
    <Box>
        <Button variant="contained" onClick={onClick}>{label}</Button>
    </Box>
);
};


export default UserButton;