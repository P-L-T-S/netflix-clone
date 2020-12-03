const API_KEY = "bf7515e7d50cf2fb4d7f5058de4abbf6";
const BASE_URL = "https://api.themoviedb.org/3/";

/* 
    - Exclusivos Netflix
    - Recomendados (trending)
    - Melhores avaliados (top rated)
    - Ação
    - Comédia
    - Terror
    - Romance
    - Documentarios
 */

async function basicFetch(endpoint) {
    const request = await fetch(`${BASE_URL}${endpoint}`);
    const response = await request.json();
    return response;
}

export default {
    getHomeList: async () => {
        
        return [
            {
                slug: "destaque",
                title: "Destque",
                itens: await basicFetch(`discover/tv?sort_by=vote_count.desc&with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "originals",
                title: "Originais da Netflix",
                itens: await basicFetch(`discover/tv?with_network=231&sort_by=vote_count.desc&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "lasts",
                title: "Lançamentos",
                itens: await basicFetch(`discover/movie/?primary_release_year=2020&sort_by=vote_count.desc&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "trending",
                title: "Em alta",
                itens: await basicFetch(`trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "toprated",
                title: "Melhores avaliações",
                itens: await basicFetch(`movie/top_rated?region=BR&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "family",
                title: "Família",
                itens: await basicFetch(`discover/movie?with_genres=10751&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "action",
                title: "Ação",
                itens: await basicFetch(`discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "adventure",
                title: "Aventura",
                itens: await basicFetch(`discover/movie?with_genres=12&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "comedy",
                title: "Comédia",
                itens: await basicFetch(`discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "horror",
                title: "Terror",
                itens: await basicFetch(`discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "romance",
                title: "Romance",
                itens: await basicFetch(`discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "sci-fi",
                title: "Ficção científica",
                itens: await basicFetch(`discover/movie?with_genres=878&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "documentary",
                title: "Documentários",
                itens: await basicFetch(`discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },
    getMoveInfo: async (id, type) => {
        let info = {};

        if(id){
            switch(type){
                case 'movie':
                    info = await basicFetch(`movie/${id}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`tv/${id}?language=pt-BR&api_key=${API_KEY}`);
                break;
            }
        }
        return info;
    }
}