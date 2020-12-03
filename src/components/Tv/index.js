import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import FeatureTv from "../FeatureTv";
import api from "../../api";

export default () => {

    const {id} = useParams()
    const [tv, setTv] = useState(null);

    useEffect(() => {
        async function tvInfo(){
            const tvInfo = await api.getMoveInfo(id, "tv");
            setTv(tvInfo);
        }
        tvInfo();
    },[])

    return (
        // <h1>Tv</h1>
        <div className="Tv">
            <Header/>
            {tv && <FeatureTv item={tv}/>}
            <Footer/>
        </div>
    )
}