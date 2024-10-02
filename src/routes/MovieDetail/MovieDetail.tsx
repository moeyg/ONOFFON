import * as S from './MovieDetail.style';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../api/axios';
import LikeButton from '../../components/LikeButton/LikeButton';

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
  genres?: [{ id: number; name: string }];
  runtime?: number;
}

const MovieDetail = () => {
  const [movie, setMovie] = useState<Movie>({});
  const { movieId } = useParams();
  const navigate = useNavigate();

  const fetchMovieData = useCallback(async () => {
    try {
      const response = await axios.get(`/movie/${movieId}`);
      setMovie(response.data);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  return (
    <S.Container>
      <S.Movie className='movie'>
        <S.Close onClick={() => navigate(-1)}>✕</S.Close>
        <S.MoviePoster>
          <S.MovieBackdrop
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                : '/images/empty-image.svg'
            }
            alt={movie.name || movie.title || movie.original_name}
          />
        </S.MoviePoster>
        <S.MovieDetails>
          <S.MovieGenres>
            {movie.genres && movie.genres.length > 0
              ? movie.genres.map((genre) => (
                  <S.Genre key={genre.id}>#{genre.name}</S.Genre>
                ))
              : null}
          </S.MovieGenres>
          <S.MovieTitle>
            {movie.name || movie.title || movie.original_name}
          </S.MovieTitle>
          <S.MovieInfo>
            <S.MovieReleaseDate>
              개봉일: {movie.release_date || movie.first_air_date}
            </S.MovieReleaseDate>
            <S.MovieVoteAverage>
              평점: {Math.floor(Number(movie?.vote_average) * 10) / 10}
            </S.MovieVoteAverage>
            <S.MovieRuntime>러닝타임: {movie.runtime}분</S.MovieRuntime>
          </S.MovieInfo>
          <S.MovieOverview>{movie.overview}</S.MovieOverview>
          <LikeButton movieId={movie.id} />
        </S.MovieDetails>
      </S.Movie>
    </S.Container>
  );
};

export default MovieDetail;
