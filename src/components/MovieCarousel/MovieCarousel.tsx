import * as S from './MovieCarousel.style';
import axios from '../../api/axios.ts';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from '../Modal/Modal.tsx';

// swiper style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

interface Props {
  genre: string;
  fetchUrl: string;
}

const MovieCarousel = ({ genre, fetchUrl }) => {
  return <div>asdfasdf</div>;
};

export default MovieCarousel;
