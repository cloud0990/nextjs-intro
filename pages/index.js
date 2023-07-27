import Seo from "components/Seo";
import { useState, useEffect } from "react";

const API_KEY = "f8fd1cd9d087287f78769f212be87f32";

export default function Home() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY)
    });

    return (
        <>
            <Seo title="Home" />

            <style jsx>{`
                .container {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  padding: 20px;
                  gap: 20px;
                }
                .movie {
                  cursor: pointer;
                }
                .movie img {
                  max-width: 100%;
                  border-radius: 12px;
                  transition: transform 0.2s ease-in-out;
                  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                  transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                  font-size: 18px;
                  text-align: center;
                }
            `}</style>
        </>
    );
}