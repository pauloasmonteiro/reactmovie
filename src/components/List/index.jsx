import axios from "axios";
import { useState, useEffect } from "react";
import { CardsContent, CardsList, CartsItem } from "./styles";
import { Link } from 'react-router-dom'
import star from '../../images/star.svg'

export function List({menu}){    
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState('2');
    const [page, setPage] = useState(1);
    const [totalpage, setTotalPage] = useState(1);
    const [searchName, setSearchName] = useState("");

    var url = `https://api.themoviedb.org/3/${menu}`;

    if (status === '1'){
        if (menu === 'movie'){
            url = `${url}/now_playing`
        }else{
            url = `${url}/airing_today`
        }
    } else if (status === '3'){
        url = `${url}/top_rated`
    } else {
        url = `${url}/popular`
    }

    useEffect(()=>{
        axios.get(url, {
            params : {
                page : page,
                language: 'pt-BR',
                api_key: 'b5a21fdcdfd94bbea1dba5f7df3f9727'
            }
        })

        //sucesso
        .then(response => {
            setItems(response.data.results);
            setTotalPage(response.data.totalpage);
        })

        //erro
        .catch(exception=>{
            console.log(exception.message);
        });

    }, [status, page])

    function alterarStatus(e){
        setStatus(e.target.value); 
        setPage(1)
    }

    function filterItems(item) {
        const lowerCaseSearchName = searchName.toLowerCase();
        const title = item.title ? item.title.toLowerCase() : "";
        const name = item.name ? item.name.toLowerCase() : "";
        return title.includes(lowerCaseSearchName) || name.includes(lowerCaseSearchName);
    }

    return(
        <div className="container">
            <input type="text" placeholder="Pesquisar..." value={searchName} onChange={(e) => setSearchName(e.target.value)} className="input" />
            <select value={status} onChange={(e)=> alterarStatus(e)} className="selector"> 
                <option value="1">{menu === 'movie' ? 'Now Playing' : 'Airing Today'}</option>
                <option value="2">Popular</option>
                <option value="3">Top Rated</option>
            </select>
            <button onClick={()=>setPage(page === 1 ? 1 : page-1)} className="buttonPage" disabled={page === 1}>Anterior</button>
            <button onClick={()=>setPage(page === totalpage ? totalpage : page+1)} className="buttonPage" disabled={page === totalpage}>Próximo</button>             
            <CardsList>
                {
                    items
                    .filter(filterItems)
                    .map((item)=>(
                        <CartsItem key={item.id}>
                            <Link to={`/detalhes/${menu}/${item.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w400${item.backdrop_path}`} />
                                <CardsContent>
                                    <h2>{menu === 'movie' ? item.title : item.name}</h2>
                                    <h3>{menu === 'movie' ? item.release_date.substring(0, 4) : item.first_air_date.substring(0, 4)}</h3>
                                    <span><img src={star} alt="Star Icon" /> {item.vote_average}</span>
                                </CardsContent>
                            </Link>
                        </CartsItem>
                    ))
                }
            </CardsList>
            <br />
            <br />
        </div>
    )
}