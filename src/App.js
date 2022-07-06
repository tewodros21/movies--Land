import { React, useEffect, useState } from "react";
//const API_KEY="81067111"
import './App.css'
import { AiOutlineSearch } from "react-icons/ai";
import MovieCard from "./MovieCard";

const API_URL = 'https://www.omdbapi.com?apikey=53f4ae90';



const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`) //calling our api
        const data = await response.json(); //after geting the response(getinig data from our url

        setMovies(data.Search)
    }


    useEffect(() => {
        // b/c we want featch a data from the url as soon as the comp load
        searchMovies('Spiderman')
        //after this we render the data in our app
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
                    <AiOutlineSearch 
                      icon="fa-solid fa-coffee" 
                      size="40" 
                      color='aliceblue'
                      onClick={() => searchMovies(searchTerm)}
                      />
            </div>

            {
                movies?.length > 0
                ? (
                  <div className="container">
                    {movies.map((movie) =>(
                       <MovieCard movie={movie}/>
                    ))}                   
                 </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>    
                )
            }

            
            
        </div>
    )
}

export default App;
