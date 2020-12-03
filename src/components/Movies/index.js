import React, {useState} from 'react';
import "./style.css";
import {Link} from "react-router-dom";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, items}) => {
    const [eixoX, setX] = useState(0);

    function previousItems(){
        // math.round arredonda um numero para o inteiro mais próximo
        let x = eixoX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        };
        setX(x);
    }
    function nextItems(){
        let x = eixoX - Math.round(window.innerWidth / 2);
        const listWidth = items.results.length * 150;
        if((window.innerWidth - listWidth) > x){
            x = (window.innerWidth - listWidth) - 60;
        }
        setX(x);
    }
    return (
        <div className="moviesRow">
            <h2>{title}</h2>

            <div className="moviesRow--leftArrow" onClick={previousItems}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="moviesRow--rightArrow" onClick={nextItems}> 
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            
            <div className="moviesRow--listarea">
                <div className="moviesRow--list" style={{
                    width: items.results.length * 150,
                    marginLeft: eixoX,
                    }}>
                    {items.results.length > 0 && items.results.map((movie, key) => (
                        <div className="moviesRow--item"  key={key}>
                            <Link to={ movie.first_air_date ? `tv/${movie.id}`: `movie/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.original_title}/>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}