import React from 'react';
import "./style.css"

export default ({item}) => {

    const date = new Date(item.first_air_date);
    if(item.overview.length > 100){
        item.overview = item.overview.substring(0, 170) + "...";
    }
    return (
        <section className="feature" style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            
            <div className="feature--vertical">
                <div className="feature--horizontal">

                    <div className="feature--name">{item.original_name}</div>

                    <div className="feature--info">
                        <div className="feature--rate">{item.vote_average} pontos</div>
                        <div className="feature--release">{date.getFullYear()}</div>
                        <div className="feature--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 && "s"}</div>
                    </div>

                    <div className="feature--description">{item.overview}</div>
                    
                    <div className="feature--buttons">
                        <a href={`watch/${item.id}`} className="watch-button">ᐅ Assistir</a>
                        <a href={`list/add/${item.id}`} className="list-button">+ minha lista</a>
                    </div>

                    <div className="feature--genres"><strong> Gêneros: </strong> 
                        {item.genres.map((genre, index) => (
                            <span key={index}>{genre.name} {index !== item.genres.length -1 && ", "}</span> 
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};