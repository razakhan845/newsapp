import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider';

function Headlines() {

    const [oneNews, setOneNews]= useState({});
    const location = useLocation();


    useEffect(() => {
        console.log(location.state);
        setOneNews(location.state);
    }, []);
    return (
        <Box>
            <Box 
            textAlign="left" sx={{ marginBottom: 5, boxShadow: "0 10px 10px rgba(0,0,0,.2)" }}>
                <img src={oneNews.urlToImage} width="100%" alt=""/>
                <Divider/>
                <Typography variant="h1">{oneNews.title}</Typography>
                <Divider/>
                <Typography variant="h4">{oneNews.author}</Typography>
                <Divider/>
                <Typography variant="h6">{oneNews.content}</Typography>
                <Divider/>
                <Typography>{oneNews.description}</Typography>
                <Divider/>
                <Typography>{oneNews.url}</Typography>
                <Typography variant="h6">published At: {oneNews.publishedAt}</Typography>
            </Box>
        </Box>
    );
};

export default Headlines;