import axios from '../../api/axios';
import requests from '../../api/request';
import * as S from './Banner.style';
import { useEffect, useRef, useState } from 'react';

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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setPlay(false);
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

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };
  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };

  return play ? (
    <S.Preview>
      <S.Video>
        <S.Close onClick={() => setPlay(false)}>✕</S.Close>
        <S.Iframe
          src={`https://www.youtube.com/embed/${movie?.videos?.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie?.videos?.results[0]?.key}`}
          allow='autoplay; fullscreen'
        ></S.Iframe>
      </S.Video>
    </S.Preview>
  ) : (
    <S.Banner $path={movie?.backdrop_path || ''}>
      <S.VisualEffect
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video ref={videoRef} loop muted>
          <source src='/videos/noise.mp4' type='video/mp4' />
        </video>
        {movie?.videos?.results[0]?.key && (
          <S.PlayButton
            onClick={() => setPlay(true)}
            src='/images/play-button.svg'
          />
        )}
      </S.VisualEffect>
      <S.FadeBottom></S.FadeBottom>
    </S.Banner>
  );
};

export default Banner;
