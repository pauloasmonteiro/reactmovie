import { Link } from 'react-router-dom'
import { Banner } from "../../components/Banner";
import { CardHomeStyle } from './styles'
import cardhomemovie from "../../images/card-home-movies.png";
import cardhomeserie from "../../images/card-home-series.png";

export function Inicio(){
    return(
        <>
            <Banner title="Filmes & Series">
                <p>
                    Lista de filmes e series baseada na API The Movie DB.
                    Confira as produções mais populares do mundo.
                </p>
            </Banner>
            <CardHomeStyle>
                <Link to='/filmes'><img src={cardhomemovie} alt="" /></Link>
                <Link to='/series'><img src={cardhomeserie} alt="" /></Link>
            </CardHomeStyle>
        </>
    )
}