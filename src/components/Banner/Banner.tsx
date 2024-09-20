import axios from '../../api/axios';
import requests from '../../api/request';
import * as S from './Banner.style';
import { useEffect, useState } from 'react';

interface Movie {
  id: number;
  title?: string;
  name?: string;
  original_name?: string;
  overview?: string;
  backdrop_path?: string;
  videos?: {
    results: { key: string }[];
  };
}

const Banner: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    try {
      const response = await axios.get(requests.fetchNowPlaying);
      const movieList = response.data.results;
      const movieId =
        movieList[Math.floor(Math.random() * movieList.length)].id;
      const { data: movieInfo } = await axios.get(`movie/${movieId}`, {
        params: { append_to_response: 'videos' },
      });
      setMovie(movieInfo);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  const truncate = (overview: string | undefined, n: number) => {
    if (typeof overview === 'string')
      return overview?.length > n ? overview.substring(0, n) + '...' : overview;
    else return;
  };

  return (
    <>
      <S.MovieBackdrop
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
      />
      <S.Banner>
        <S.BannerContents>
          <S.MovieTitle>
            {movie?.title || movie?.name || movie?.original_name}
          </S.MovieTitle>
          <S.MovieDescription>
            {truncate(movie?.overview, 100)}
          </S.MovieDescription>
          <S.PlayButton>
            {movie?.videos?.results[0]?.key && (
              <S.Button onClick={() => setPlay(true)}>▷ Play</S.Button>
            )}
          </S.PlayButton>
        </S.BannerContents>
      </S.Banner>
      <S.FadeBottom></S.FadeBottom>
    </>
  );
};

export default Banner;
