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

  return (
    <S.Banner $path={movie?.backdrop_path || ''}>
      <S.Backdrop $path={'/images/background.svg'}>
        <S.PlayButton src='/images/play-button.svg' />
      </S.Backdrop>
      <S.FadeBottom></S.FadeBottom>
    </S.Banner>
  );
};

export default Banner;
