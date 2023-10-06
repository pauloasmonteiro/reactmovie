import { Link } from 'react-router-dom'
import { Banner } from "../../components/Banner";
import { List } from '../../components/List';

export function Filmes(){
    return(
        <>
            <Banner title="Filmes">
                <p>
                    Confira as produções mais populares do mundo.
                </p>
            </Banner>
            <List/>
        </>
    )
}