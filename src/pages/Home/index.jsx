import { useEffect, useState } from "react";
import api from '../../services/api'

function Home(){
const [filmes, setFilmes] = useState([]);

useEffect(()=>{
async function loadFilmes() {
    const response = await api.get("movie/now_playing", {
        params:{
            api_key:"6588f59db426156c81ccab94f485a40c",
            language: "pt-BR",
            page: 1,
        }
    })
    
}
loadFilmes();
}, [])

    return(
        <div>
            <h1>home</h1>
        </div>
    )
}
export default Home;