import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';

function News() {

    const [articles, setArticles] = useState([]);
    const [loader, setLoader] = useState(true);



    const navigate = useNavigate();

    const getNews = () => {
        setLoader(true);
        let api = "https://newsapi.org/v2/everything?q=tesla&from=2022-05-09&sortBy=publishedAt&apiKey=cfce5400afaf456aaa8070be103a9010";
        axios.get(api)
            .then((success) => {
                console.log(success)
                setArticles(success.data.articles)
                setLoader(false);
            }).catch((err) => {
                console.log(err)
                setLoader(false);
            });
    };

    const clicktoNews = (item) => {
        navigate("/headlines", {
            state: item,
        })
        console.log(item);
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <Box>
            <Typography variant="h2">News</Typography>
            <Box>
                <IconButton
                    onClick={() => getNews()}
                    color="primary" aria-label="Reload page">
                    <ReplayIcon />
                </IconButton>
            </Box>
            {loader ? (<Box>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bc0c6b69321565.5b7d0cbe723b5.gif" width="50%" />
            </Box>
            ) : (
            <Box>
                {articles.map((e, i) => (
                    <Box onClick={() => clicktoNews(e)}
                        textAlign="left" sx={{ marginBottom: 5, boxShadow: "0 10px 10px rgba(0,0,0,.2)", cursor:"pointer" }}>
                        <Box sx={{ display: "flex", justifyContent: "start" }}>
                            <img src={e.urlToImage} width="200px" alt="" />
                            <Typography variant="h4">{e.title}</Typography>
                        </Box>
                        <Typography variant="h5">{e.author}</Typography>
                        <Typography>{e.description}</Typography>
                        <Typography> published at: {e.publishedAt}</Typography>
                    </Box>
                ))}
            </Box>)}
            <Box>
                {articles.map((e, i) => (
                    <Box onClick={() => clicktoNews(e)}
                        textAlign="left" sx={{ marginBottom: 5, boxShadow: "0 10px 10px rgba(0,0,0,.2)" }}>
                        <Box sx={{ display: "flex", justifyContent: "start" }}>
                            <img src={e.urlToImage} width="200px" alt="" />
                            <Typography variant="h4">{e.title}</Typography>
                        </Box>
                        <Typography variant="h5">{e.author}</Typography>
                        <Typography>{e.description}</Typography>
                        <Typography> published at: {e.publishedAt}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default News;