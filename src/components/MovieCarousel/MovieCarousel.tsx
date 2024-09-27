import * as S from './MovieCarousel.style';
import './MovieCarousel.css';

import { useCallback, useEffect, useState } from 'react';
import axios from '../../api/axios.ts';
import Modal from '../Modal/Modal.tsx';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

interface MovieData {
  genre: string;
  fetchUrl: string;
}

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
}

const MovieCarousel: React.FC<MovieData> = ({ genre, fetchUrl }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});

  const fetchMoviesData = useCallback(async () => {
    try {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  }, [fetchUrl]);

  useEffect(() => {
    fetchMoviesData();
  }, [fetchMoviesData]);

  const openModal = (movie: Movie) => {
    setMovie(movie);
    setModalOpen(true);
  };

  return (
    <S.Container>
      <S.MovieGenre>| {genre}</S.MovieGenre>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={15}
        breakpoints={{
          1200: {
            slidesPerView: 5,
            slidesPerGroup: 2,
          },
          998: {
            slidesPerView: 4,
            slidesPerGroup: 2,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 2,
          },
        }}
      >
        {movies.map((movie: Movie) => (
          <SwiperSlide key={movie.id}>
            <S.Movie onClick={() => openModal(movie)}>
              <S.MoviePoster
                src={
                  movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                    : '/images/empty-image.svg'
                }
                alt={movie.name}
              />
              <S.MovieTitle>
                {movie.name || movie.title || movie.original_name || ''}
              </S.MovieTitle>
            </S.Movie>
          </SwiperSlide>
        ))}
      </Swiper>
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} movie={movie} genre={genre} />
      )}
    </S.Container>
  );
};

export default MovieCarousel;
