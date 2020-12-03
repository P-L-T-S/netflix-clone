import React from 'react';
import "./style.css"

export default ({item}) => {
    console.log(item)
    const date = new Date(item.release_date);
    if(item.overview.length > 350){
        item.overview = item.overview.substring(0, 170) + "...";
    }
    return (
        <section className="feature" style={{
            backgroundSize: "80% 100%",
            backgroundPosition: "right",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            
            <div className="feature--vertical">
                <div className="feature--horizontal">

                    <div className="feature--name">{item.original_title}</div>

                    <div className="feature--info">
                        <div className="feature--rate">{item.vote_average} pontos</div>
                        <div className="feature--release">{date.getFullYear()}</div>
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

                    <div className="feature--tagline"><p>{item.tagline}</p></div>

                </div>
            </div>
        </section>
    );
};