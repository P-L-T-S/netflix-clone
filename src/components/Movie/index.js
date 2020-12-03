import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import "./Movie.css";
import FeatureMovie from "../FeatureMovie";
import Header from "../Header";
import Footer from "../Footer";
import api from '../../api';

export default () => {
    const [movie, setMovie] = useState(null)
    const {id} = useParams();
    useEffect(() => {
        async function movieInfo(){
            const movieInfo = await api.getMoveInfo(id, "movie");
            setMovie(movieInfo);
        }
        movieInfo();
    },[])

    return (
        <div className="Movie">
            <Header/>
            {movie && <FeatureMovie item={movie}/>}
            <Footer/>
        </div>
    );
};