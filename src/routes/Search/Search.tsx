import * as S from './Search.style';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useDebounce from '../../hooks/useDebounce.js';
import axios from '../../api/axios.js';

interface Movie {
  id?: number;
  title?: string;
  name?: string;
  original_name?: string;
  overview?: string;
  backdrop_path?: string;
  release_date?: string;
  first_air_date?: string;
  vote_average?: string;
  media_type?: string;
}

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const navigate = useNavigate();
  const searchedMovie = query.get('q') || '';
  const debounceSearchTerm = useDebounce(searchedMovie, 500);

  const fetchSearchMovies = async (searchedMovie: string) => {
    try {
      const response = await axios.get(
        `/search/multi?include_adult=false&query=${searchedMovie}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  useEffect(() => {
    if (debounceSearchTerm && debounceSearchTerm.trim() !== '') {
      fetchSearchMovies(debounceSearchTerm);
    }
  }, [debounceSearchTerm]);

  return searchResults.length ? (
    <S.Search>
      {searchResults.map((movie: Movie) => {
        if (movie.backdrop_path !== null && movie.media_type !== 'person') {
          const movieImageUrl =
            'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;

          return (
            <S.Movie key={movie.id}>
              <S.MovieInfo onClick={() => navigate(`/movie/${movie.id}`)}>
                <S.MoviePoster
                  src={movieImageUrl}
                  alt={movie.name || movie.title || movie.original_name}
                />
                <S.MovieTitle>
                  {movie.name || movie.title || movie.original_name}
                </S.MovieTitle>
              </S.MovieInfo>
            </S.Movie>
          );
        }
        return null;
      })}
    </S.Search>
  ) : (
    <S.NoResults>
      <p>&quot;{searchedMovie}&quot; 에 해당하는 영화가 없습니다.</p>
    </S.NoResults>
  );
};

export default Search;
