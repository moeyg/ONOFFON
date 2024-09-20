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
  id: number;
  poster_path: string;
  name: string;
  title?: string;
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
      console.error('Error:', error);
    }
  }, [fetchUrl]);

  const openModal = (movie: Movie) => {
    setModalOpen(true);
    setMovie(movie);
  };

  useEffect(() => {
    fetchMoviesData();
  }, [fetchMoviesData]);

  return (
    <S.Container>
      <S.MovieGenre>{genre}</S.MovieGenre>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={15}
        breakpoints={{
          1378: {
            slidesPerView: 9,
            slidesPerGroup: 9,
          },
          998: {
            slidesPerView: 8,
            slidesPerGroup: 8,
          },
          625: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          0: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
      >
        {movies.map((movie: Movie) => (
          <SwiperSlide key={movie.id}>
            <S.Movie onClick={() => openModal(movie)}>
              <S.MoviePoster
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.name}
              />
            </S.Movie>
          </SwiperSlide>
        ))}
        {modalOpen && (
          <Modal setModalOpen={setModalOpen} {...movie} genre={genre} />
        )}
      </Swiper>
    </S.Container>
  );
};

export default MovieCarousel;
