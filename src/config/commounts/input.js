import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';

function Inputfield (props){
    const {label, type, onChange} = props;

    return(
        <Box>
             <TextField 
             onChange={onChange} 
             label={label} 
             type={type} 
             variant="standard" />
        </Box>
    )
};

export default Inputfield;