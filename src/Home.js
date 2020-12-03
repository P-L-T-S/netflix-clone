import React, {useEffect, useState} from 'react'
import './App.css';

import Api from "./api"
import Header from "./components/Header";
import Movies from "./components/Movies"
import FeatureTv from "./components/FeatureTv";
import Footer from "./components/Footer";

export default function Home() {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    async function loadAll(){
      //  pegando a lista total
      let all = await Api.getHomeList();
      const list = all.filter(item => item.slug !== "destaque")
      setMovieList(list);

      // pegando o featureData
      const originals = all.filter(item  => item.slug === "destaque")
      // Math.floor arredonda um numero flutuante para baixo
      // Math.random gera um numero aleatorio entre 0 e 1
      // O código abaixo gera um numero entre 0 e o numero de itens no array
      const randomChoice = Math.floor(Math.random() * (originals[0].itens.results.length - 1));
      const choosen = originals[0].itens.results[randomChoice];
      const choosenInfo = await Api.getMoveInfo(choosen.id, "tv");
      setFeatureData(choosenInfo)
    }
    loadAll();
  },[]);

  return (
    <div className="Page">
      {
        featureData === null || movieList <= 0 &&
        <div className="loading">
          <img src="https://assets.wired.com/photos/w_2000/wp-content/uploads/2016/01/Netflix_LoadTime.gif" alt="loading"/>
        </div>
      }
      <Header/>

      {featureData && <FeatureTv item={featureData}/>}
      <section className="lists">
        {
          movieList.map((item, key) => (
            <Movies key={key} title={item.title} items={item.itens}/>
          ))
        }

      </section>
      <Footer/>

      
    </div>
  );
}