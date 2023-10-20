import axios from "axios";
import star from '../../images/star.svg'
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { BannerDetalhes, Content } from "./styles";
import { BarLoader } from "react-spinners";

export function Detalhes(){

    const {menu} = useParams();
    const {id} = useParams();
    const {navigate} = useNavigate();

    const [item, setItem] = useState([]);
    const [loader, setLoader] = useState(true)

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/${menu}/${id}`, {
            params : {
                language: 'pt-BR',
                api_key: 'b5a21fdcdfd94bbea1dba5f7df3f9727'
            }
        })

        //sucesso
        .then(response => {
            setItem(response.data);
            setLoader(false);
        })

        //erro
        .catch(exception=>{
            console.log(exception.message);
        });

    }, [])

    if (loader) {
        <BarLoader color="blue" width="100%" />
    }

    return(
        <>
            <BannerDetalhes img={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} />
            <Content>
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                <div>
                    <h1>{menu === "movie" ? item.title : item.name}</h1>
                    <h2>{item.tagline}</h2>
                    <ul>
                        <li>Ano: {menu === 'movie' ? item.release_date : item.first_air_date}</li>
                        <li><img src={star} alt="Star Icon" /> {item.vote_average}</li>
                    </ul>
                    <p>
                        {item.overview}
                    </p>
                    <button onClick={()=>navigate-1}>Voltar</button>
                </div>
            </Content>
        </>
    )
}