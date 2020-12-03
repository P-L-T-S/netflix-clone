import React from 'react';
import "./style.css"

export default ({item}) => {
    return (
        <footer>
            <p>
                Feito com <span role="img" aria-label="coração">💜</span> por Pedro Leonardo T <br/>
                Direitos de imagem para <a href="https://www.netflix.com/br/">Netflix</a> <br/>
                Dados retirados do site <a href="https://www.themoviedb.org/">The Movie DataBase</a>
            </p>
        </footer>
    )
}